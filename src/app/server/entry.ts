import * as express from 'express';

import { getIsStaticGenerate } from '@app/util/env';
import { serverLog } from '@app/util/serverLog';

import { handler } from './app';
import { generateStaticPage } from './generator';
import { develop } from './middleware/develop';
import { page } from './static';

import type { INestApplication } from '@nestjs/common';
import type { Express } from 'express';

let handlerRender = handler;

export const setUpApp = async (app: INestApplication) => {
  const expressApp = app.getHttpAdapter() as unknown as Express;

  expressApp.use(express.static(`${process.cwd()}/static`));

  expressApp.use(express.static(`${process.cwd()}/dist`));

  page(expressApp);

  await develop(expressApp);

  expressApp.use((req, res, next) => {
    handlerRender()(req, res, next);
  });

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./app.ts', () => {
      serverLog('app update', 'info');
      handlerRender = handler;
    });
    module.hot.dispose(() => app.close());
  }

  if (getIsStaticGenerate()) {
    setTimeout(() => {
      serverLog(`start static page generate, base on current router`, 'info');
      generateStaticPage().then(() => {
        process.exit(0);
      });
    }, 1000);
  }
};

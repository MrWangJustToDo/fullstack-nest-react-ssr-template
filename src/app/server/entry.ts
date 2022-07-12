import * as express from 'express';

import { serverLog } from '@app/util/serverLog';

import { handler } from './app';
import { develop } from './middleware/develop';

import type { INestApplication } from '@nestjs/common';
import type { Express } from 'express';

let handlerRender = handler;

export const setUpApp = async (app: INestApplication) => {
  const expressApp = app.getHttpAdapter() as unknown as Express;
  expressApp.use(express.static(`${process.cwd()}/static`));
  expressApp.use(express.static(`${process.cwd()}/dist`));

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
};

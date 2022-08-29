import path from 'path';

import { start } from './entry-dev';

import type { INestApplication } from '@nestjs/common';

export const injectApp = async (
  app: INestApplication,
  startCallback?: (cb: () => Promise<void> | void) => void,
) => {
  await start();
  const { setUpApp } = await import(
    path.resolve(process.cwd(), 'dev', 'app', 'server', 'app')
  );
  await setUpApp(app, startCallback);
};

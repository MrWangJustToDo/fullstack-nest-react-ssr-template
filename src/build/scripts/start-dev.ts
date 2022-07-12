import { INestApplication } from '@nestjs/common';
import path from 'path';

import { start } from './entry-dev';

export const injectApp = async (app: INestApplication) => {
  await start();
  const { setUpApp } = await import(
    path.resolve(process.cwd(), 'dev', 'app', 'server', 'app')
  );
  await setUpApp(app);
};

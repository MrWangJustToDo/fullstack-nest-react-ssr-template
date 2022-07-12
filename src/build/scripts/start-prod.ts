import { INestApplication } from '@nestjs/common';
import path from 'path';

export const injectApp = async (app: INestApplication) => {
  const { setUpApp } = await import(
    path.resolve(process.cwd(), 'dist', 'app', 'server', 'app')
  );
  await setUpApp(app);
};

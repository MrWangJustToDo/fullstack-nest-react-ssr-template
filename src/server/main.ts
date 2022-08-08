import { NestFactory } from '@nestjs/core';

import { injectApp } from '@build/scripts/start';

import { AppModule } from './app/app.module';

const startApp = async () => {
  const app = await NestFactory.create(AppModule);
  await injectApp(app);
  const port =
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_PORT
      : process.env.DEV_PORT;
  app.listen(port, () => {
    console.log(`app is running, open http://localhost:${port}`);
  });
};

startApp();

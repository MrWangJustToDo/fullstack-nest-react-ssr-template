import { NestFactory } from "@nestjs/core";

import { injectApp } from "../build/scripts/start";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.NODE_ENV === "production" ? process.env.PROD_PORT : process.env.DEV_PORT;

  let cb = () => console.log(`[global] app is running, open http://localhost:${port}`);

  await injectApp(app, (_cb) => (cb = _cb || cb));

  await app.listen(port, cb);
}

bootstrap();

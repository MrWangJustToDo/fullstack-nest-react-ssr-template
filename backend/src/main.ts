import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

export async function bootstrap(injectMiddleware?: (app: INestApplication) => Promise<{ port: string; cb: () => void }>) {
  const app = await NestFactory.create(AppModule);

  const { port, cb } = (await injectMiddleware?.(app)) || {};

  console.log(port);

  await app.listen(port || 3000, cb);
}
import { resolve } from "path";

import { start } from "./entry-dev";

import type { INestApplication } from "@nestjs/common";

export const startDev = async (app: INestApplication, startCallback?: (cb: () => Promise<void> | void) => void) => {
  await start();
  const { setupApp } = await import(resolve(process.cwd(), "dev", "ui", "server", "app.js"));
  await setupApp(app.getHttpAdapter(), startCallback);
};

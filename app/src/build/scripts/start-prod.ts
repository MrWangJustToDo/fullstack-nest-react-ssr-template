import { resolve } from "path";

import type { INestApplication } from "@nestjs/common";

export const startProd = async (app: INestApplication, startCallback?: (cb: () => Promise<void> | void) => void) => {
  const { setupApp } = await import(resolve(process.cwd(), "dist", "ui", "server", "app.js"));
  await setupApp(app.getHttpAdapter(), startCallback);
};

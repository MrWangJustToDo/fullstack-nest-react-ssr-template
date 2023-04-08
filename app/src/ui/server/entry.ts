import express from "express";

import { getIsStaticGenerate } from "@shared";

import { generateHandler } from "./app";
import { generateStaticPage } from "./generator";
import { develop } from "./middleware/develop";
import { page } from "./static";
import { serverLog } from "./util/serverLog";

import type { Express } from "express";

let handlerRender = generateHandler;

export const setupApp = async (app: Express, startCallback?: (cb: () => Promise<void>) => void) => {
  const expressApp = app;

  expressApp.use(express.static(`${process.cwd()}/public`));

  expressApp.use(express.static(`${process.cwd()}/dist`));

  expressApp.use(express.static(`${process.cwd()}/dist/ui/client`))

  page(expressApp);

  await develop(expressApp);

  expressApp.use((req, res, next) => {
    handlerRender()(req, res, next);
  });

  if (__DEVELOPMENT__ && process.env.FRAMEWORK === "webpack" && module.hot) {
    module.hot.accept("./app.ts", () => {
      serverLog("app update", "info");
      handlerRender = generateHandler;
    });
    module.hot.dispose(() => process.exit(0));
  }

  if (startCallback && getIsStaticGenerate()) {
    startCallback(async () => {
      serverLog(`start static page generate, base on current router`, "info");
      await generateStaticPage();
      process.exit(0);
    });
  }
};

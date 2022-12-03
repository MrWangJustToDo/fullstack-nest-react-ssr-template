/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from "path";

import type { SafeAction } from "../compose";

type Mode = { mode: "SSR" | "CSR" | "P_CSR" };

export const viteRender =
  ({ mode }: Mode): SafeAction =>
  async (args) => {
    if (__DEVELOPMENT__) {
      const { req } = args;
      const { viteServer } = req;
      const { targetRender } = await viteServer.ssrLoadModule(resolve(process.cwd(), "src/ui/server/middleware/renderPage/native", `render${mode}.tsx`));
      await targetRender(args);
    } else {
      const { env } = args;
      if (env.isSSR) {
        const { targetRender } = require(resolve(process.cwd(), "dist/ui/server/renderSSR.js"));
        await targetRender(args);
      } else if (env.isPURE_CSR) {
        const { targetRender } = require(resolve(process.cwd(), "dist/ui/server/renderP_CSR.js"));
        await targetRender(args);
      } else {
        const { targetRender } = require(resolve(process.cwd(), "dist/ui/server/renderCSR.js"));
        await targetRender(args);
      }
    }
  };

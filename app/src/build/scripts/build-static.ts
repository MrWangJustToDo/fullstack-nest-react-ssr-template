import { spawn } from "child_process";
import dotenv from "dotenv";

import { start } from "./entry-prod";

dotenv.config();

const generate = async () => {
  // build prod code first
  await start();

  spawn("cross-env STATIC_GENERATE=true node", ["./dist/server/main.js"], {
    shell: true,
    stdio: "inherit",
  });
};

generate();

import { spawn } from 'child_process';

import { start } from './entry-prod';

const generate = async () => {
  // build prod code first
  await start();

  spawn('cross-env STATIC_GENERATE=true node', ['./dist/server/main.js'], {
    shell: true,
    stdio: 'inherit',
  });
};

generate();

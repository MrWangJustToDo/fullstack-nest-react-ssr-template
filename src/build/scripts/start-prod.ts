import path from 'path';

import type { INestApplication } from '@nestjs/common';

export const injectApp = async (
  app: INestApplication,
  startCallback?: (cb: () => Promise<void> | void) => void,
) => {
  const { setUpApp } = await import(
    path.resolve(process.cwd(), 'dist', 'app', 'server', 'app')
  );
  await setUpApp(app, startCallback);
};

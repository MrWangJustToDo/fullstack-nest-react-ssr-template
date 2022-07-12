import { webpack } from 'webpack';

import { config } from '@build/webpack/webpack.config';

import { compilerPromise } from './compiler';
import { freePort } from './free-post';
import { logger } from './log';
import { startDevServer } from './startDevServer';
import { startServerWatch } from './startServerWatch';

const withHydrate = async () => {
  await Promise.all([
    freePort(process.env.DEV_PORT),
    freePort(process.env.WDS_PORT),
  ]);
  const multiConfig = config(true);
  const multiCompiler = webpack(multiConfig);
  const [clientConfig] = multiConfig;
  const clientCompiler = multiCompiler.compilers.find(
    (compiler) => compiler.name === 'client',
  );
  const serverCompiler = multiCompiler.compilers.find(
    (compiler) => compiler.name === 'server',
  );

  startDevServer(clientCompiler, clientConfig);

  startServerWatch(serverCompiler);

  const clientCompilerPromise = compilerPromise('client', clientCompiler, true);

  const serverCompilerPromise = compilerPromise('server', serverCompiler);

  try {
    await Promise.all([clientCompilerPromise, serverCompilerPromise]);
  } catch (e) {
    logger().error(e.message);
  }
};

const withMiddleware = async () => {
  await freePort(process.env.DEV_PORT);
  const multiConfig = config(true);
  const [, serverConfig] = multiConfig;
  const serverCompiler = webpack(serverConfig);
  const serverCompilerPromise = compilerPromise('server', serverCompiler);
  serverCompiler.run(() => void 0);
  try {
    await serverCompilerPromise;
  } catch (e) {
    logger().error(e.message);
  }
};

export const start = async () => {
  if (process.env.MIDDLEWARE === 'true') {
    await withMiddleware();
  } else {
    await withHydrate();
  }
};

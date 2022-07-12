import { Configuration } from 'webpack';

import type { GenerateActionProps } from './type';

export const statsConfig = ({
  env,
  isDEV,
}: GenerateActionProps): Configuration['stats'] => {
  return isDEV || env === 'server' ? 'errors-only' : 'normal';
};

import { defaultLang } from '@app/util/i18n';
import { RenderError } from '@app/util/renderError';

import type { Middleware } from '../compose';

export const initLang: Middleware = (next) => async (args) => {
  const { env } = args;
  if (!env) {
    throw new RenderError('env 没有初始化', 5000);
  }
  const { req, res } = args;
  const cookieLang = req.cookies?.site_lang;
  const lang = cookieLang || defaultLang;

  res.cookie('site_lang', lang);

  args.lang = lang;

  env['LANG'] = lang;

  await next(args);
};

declare global {
  const __CLIENT__: boolean;
  const __SERVER__: boolean;
  const __CSR__: boolean;
  const __SSR__: boolean;
  const __DEVELOPMENT__: boolean;
  const __MIDDLEWARE__: boolean;
  const __ANIMATE_ROUTER__: boolean;
  const __BUILD_TIME__: string;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      DEV_HOST: string;
      DEV_PORT: string;
      WDS_PORT: string;
      PROD_PORT: string;
      SSR: string;
      CSR: string;
      STATIC_GENERATE: 'true' | 'false';
      PUBLIC_DEV_API_HOST: string;
      PUBLIC_PROD_API_HOST: string;
      SERVER_ENTRY: string;
      CLIENT_ENTRY: string;
      MIDDLEWARE: string;
      ANIMATE_ROUTER: string;
    }
  }
}

export {};

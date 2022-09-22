declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      DEV_HOST: string;
      DEV_PORT: string;
      WDS_PORT: string;
      PROD_PORT: string;
      SWC: string;
      ESBUILD: string;
      SSR: string;
      CSR: string;
      STATIC_GENERATE: "true" | "false";
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

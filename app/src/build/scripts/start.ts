import { startDev } from "./start-dev";
import { startProd } from "./start-prod";

export const injectApp = process.env.NODE_ENV === "development" ? startDev : startProd;

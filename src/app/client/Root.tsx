import { ChakraProvider, createCookieStorageManager } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "@app/common/App";
import { theme } from "@app/theme";
import { createEmotionCache } from "@app/util/emotionCache";

import type { createUniversalStore } from "store";

const emotionCache = createEmotionCache();

const Root = ({ store }: { store: ReturnType<typeof createUniversalStore> }) => {
  
  // this component will only run once when the page mount, so it's ok to use server's cookie
  const cookieStore = createCookieStorageManager("chakra-ui-color-mode", document.cookie);

  return (
    <StrictMode>
      <CacheProvider value={emotionCache}>
        <ChakraProvider resetCSS theme={theme} colorModeManager={cookieStore}>
          <Provider store={store} serverState={store.getState()}>
            <Router>
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </Router>
          </Provider>
        </ChakraProvider>
      </CacheProvider>
    </StrictMode>
  );
};

export { Root };

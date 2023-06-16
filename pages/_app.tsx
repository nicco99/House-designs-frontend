import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { ThemeProvider, styled } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import { NextPageWithLayout } from "./page";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const FullBodyContainer = styled(Stack)`
  min-height: 100vh;
`;

function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component?.getLayout || ((page) => page);
  return (
    <React.Fragment>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FullBodyContainer className="fullBodyContainer">
            {getLayout(<Component {...pageProps} />)}
          </FullBodyContainer>
        </ThemeProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;

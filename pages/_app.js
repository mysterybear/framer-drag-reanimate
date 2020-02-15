import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useState } from 'react';
import { globalStyles } from '../styles';

const initialTheme = {};

export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(initialTheme);
  const Layout = Component.Layout || (x => x);

  return (
    <>
      <Head>
        <title>{pageProps.title || "My Website"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {Layout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

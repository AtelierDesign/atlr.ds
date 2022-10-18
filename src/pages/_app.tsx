import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { darkTheme, globalCss } from '../../stitches.config';
import 'inter-ui/inter.css';
import '../styles/okaidia.css';
import '../styles/pragmatica.css';
import '../styles/LD-Grotesk.css';
import '../styles/untitled-sans.css';
import { res } from '../styles/res';
import '../styles/styles.css';

const globalStyles = globalCss(res, {
  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '$mauve1',

    minHeight: '-webkit-fill-available'
  },
  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$mauve1',
    minHeight: '-webkit-fill-available',
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
});

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <title>Atelier® Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

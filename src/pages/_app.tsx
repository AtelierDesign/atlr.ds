import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { globalCss } from '../../stitches.config';
import 'inter-ui/inter.css';
import '../styles/pragmatica.css';
import '../styles/untitled-sans.css';
import { res } from '../styles/res';
import '../styles/styles.css';

const globalStyles = globalCss(res, {
  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '$mauve1',

    minHeight: '-webkit-fill-available',
  },
  body: {
    margin: 0,
    color: '$hiContrast',
    WebkitTextSizeAdjust: '100%',
    backgroundColor: '$mauve1',
    minHeight: '-webkit-fill-available',
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <title>Atelier® Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

/* eslint-disable */
import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;

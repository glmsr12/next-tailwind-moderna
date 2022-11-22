import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
    <StoreProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;

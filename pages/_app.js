import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <StoreProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </StoreProvider>
  );
}

export default MyApp;

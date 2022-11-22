import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
<<<<<<< HEAD
    <StoreProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </StoreProvider>
=======
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42
  );
}

export default MyApp;

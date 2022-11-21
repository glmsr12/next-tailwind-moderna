import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactTostify.css';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, []);
  return (
    <>
      <Head>
        <title> {title ? title + '- Moderna' : 'Moderna'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 item-center px-4 justify-between shadow-md bg-blue-500">
            <Link href="/">
              <a className="text-xl mt-6 text-white font-bold">
                Moderna Furniture
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2 text-white">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {/* check the login status if is loading show loading page 
              if the user exist show the user name otherwise show login 
              */}

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <a className='"p-2'>Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-20 justify-center items-center shadow-inner bg-blue-500">
          <p className="font-sans text-xs font-bold text-white">
            Copyright © 2022 Moderna Furniture
          </p>
        </footer>
      </div>
    </>
  );
}

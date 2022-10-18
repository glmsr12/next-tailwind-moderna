import Link from 'next/Link';
import Head from 'next/head';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title> {title ? title + '- Moderna' : 'Moderna'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-16 item-center px-4 justify-between shadow-md bg-yellow-600">
            <Link href="/">
              <a className="text-lg font-bold">Moderna Furniture</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-20 justify-center items-center shadow-inner bg-yellow-600">
          <p className="font-sans text-xs font-bold">
            Copyright © 2022 Moderna Furniture
          </p>
        </footer>
      </div>
    </>
  );
}

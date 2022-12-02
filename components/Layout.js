import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + '- Moderna Furniture' : 'Moderna Furniture'}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="font-mono text-3xl font-bold">
                Moderna <span className="font-sans">Furniture</span>
              </a>
            </Link>

            <div>
              <Link href="/cart">
                <a className="p-3 ">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-3">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          ®Copyright 2022 Moderna
        </footer>
      </div>
    </>
  );
}

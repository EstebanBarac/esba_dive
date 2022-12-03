import React from 'react'
import Head from 'next/head';
import Advanced from '../components/Advanced.jsx';

export default function advanced() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Open Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Advanced />
    </div>
  )
}

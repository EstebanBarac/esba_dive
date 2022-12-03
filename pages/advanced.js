import React from 'react'
import Head from 'next/head';
import Advanced from '../components/Advanced.jsx';

export default function advanced() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Advanced</title>
        <link rel="icon" href="https://cdn.emojidex.com/emoji/seal/scuba_diver.png" />
      </Head>
      <Advanced />
    </div>
  )
}

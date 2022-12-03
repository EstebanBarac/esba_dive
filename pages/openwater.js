import React from 'react';
import Head from 'next/head';
import OpenWater from '../components/OpenWater.jsx';

export default function openwater() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Open Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OpenWater />
    </div>
  )
}

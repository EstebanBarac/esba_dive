import React from 'react';
import Head from 'next/head';
import OpenWater from '../components/OpenWater.jsx';

export default function openwater() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Open Water</title>
        <link rel="icon" href="https://cdn.emojidex.com/emoji/seal/scuba_diver.png" />
      </Head>
      <OpenWater />
    </div>
  )
}

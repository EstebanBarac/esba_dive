import React from 'react'
import Head from 'next/head';
import Specialities from '../components/Specialities.jsx';

export default function specialities() {
  return (
    <div>
      <Head>
        <title>ESBA DIVE | Specialities</title>
        <link rel="icon" href="https://cdn.emojidex.com/emoji/seal/scuba_diver.png" />
      </Head>
      <Specialities />
    </div>
  )
}

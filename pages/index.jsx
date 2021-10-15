import React from 'react'
import Head from 'next/head'
import { Header, Nav } from '../components'

const Home = () => (
    <>
      <Head>
        <title>Hulu Clone | Sidani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      {/*  Results */}
    </>
)

export default Home

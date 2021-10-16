import React from 'react'
import Head from 'next/head'
import { Header, Nav, Results } from '../components'
import { requests } from '../utils'
import { tmdbBaseUrl } from '../constants'

const Home = ({ results }) => (
  <>
    <Head>
      <title>Hulu Clone | Sidani</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Nav />
    <Results results={results} />
  </>
)

export default Home

export async function getServerSideProps(context) {
  const { genre } = context.query
  const req = await fetch(`${tmdbBaseUrl}${requests[genre]?.url || requests.fetchTrending.url}`)
    .then((res) => res.json())

  return {
    props: {
      results: req.results,
    },
  }
}

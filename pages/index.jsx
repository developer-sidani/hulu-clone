import React from 'react'
import Head from 'next/head'
import { Header, Nav, Results } from '../components'
import { requests } from '../utils'

const tmdbBaseUrl = 'https://api.themoviedb.org/3'

const Home = ({ results }) => {
  console.log(results)
  return (
  <>
    <Head>
      <title>Hulu Clone | Sidani</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Nav />
    <Results />
  </>
  )
}

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

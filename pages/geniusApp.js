import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function geniusApp() {
  return (
    <div className="container">
      <Head>
        <title>genius app goes here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="placeholder title" />
        <p className="description">
          tbh idk what im doing 
          <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

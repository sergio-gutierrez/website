import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="placeholder title" />
        <p className="description">
          maybe this will work? <code>pages/index.js</code>
        </p>

        <Link href="/geniusApp">
          <a>Go to Second Page</a>
        </Link>


      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Layout from '@components/Layout'

export default function geniusApp() {
  return (
    <Layout>
        <div className="tabs">
        <Link href="/index">
          <a className="tab">Home</a>
        </Link>
        <Link href="/geniusApp">
          <a className="tab">App</a>
        </Link>

      </div>
      <h1>placeholder 2</h1>
      <p>this is the second placeholder</p>
    </Layout>
  )
}

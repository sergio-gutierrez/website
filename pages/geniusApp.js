import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Layout from '@components/Layout'
import Link from 'next/link'

export default function geniusApp() {
  return (
    <Layout>
        <div className="tabs">
        <Link href="/index">
          <div className="tab">Home</div>
        </Link>
        <Link href="/geniusApp">
          <div className="tab">App</div>
        </Link>

      </div>
      <h1>placeholder 2</h1>
      <p>this is the second placeholder</p>
    </Layout>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Layout from '@components/Layout'

export default function Home() {
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
      <h1>home page</h1>
      <p>this is placeholder content</p>
    </Layout>
  )
}



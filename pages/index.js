import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="tabs">
        <Link href="/">
          <a className="tab">Home</a>
        </Link>
        <Link href="/about">
          <a className="tab">App</a>
        </Link>

      </div>
      <h1>placeholder</h1>
      <p>this is placeholder content</p>
    </Layout>
  )
}



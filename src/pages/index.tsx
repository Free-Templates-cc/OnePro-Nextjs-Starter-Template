import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Welcome from '@/components/Welcome/Welcome'
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>OnePro Nextjs Starter Template</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Welcome />
        <Services />
        <Footer />
      </main>
    </>
  )
}

import Head from 'next/head'
import Header from '@/components/Header/Header'
import Welcome from '@/components/Welcome/Welcome'
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer'
import Featured from '@/components/Featured/Featured'
import About from '@/components/About/About'
import Portfolio from '@/components/Portfolio/Portfolio'
import Cta from '@/components/Cta/Cta'
import Team from '@/components/Team/Team'
import Testimonials from '@/components/Testimonials/Testimonials'
import Info from '@/components/Info/Info'
import Pricing from '@/components/Pricing/Pricing'
import News from '@/components/News/News'
import Contact from '@/components/Contact/Contact'

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
        <Featured />
        <About />
        <Services />
        <Portfolio />
        <Cta />
        <Team />
        <Info />
        <Testimonials />
        <Pricing />
        <News />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

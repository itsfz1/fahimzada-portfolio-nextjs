import Head from 'next/head'
import { Header } from '../components/Header'
import { Education } from '../components/Education'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

const HOME = () =>
{
  return (
    <div>
      <Head>
        <title>Itfz1 Porfolio! - Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Education />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>

  )
}

export default HOME

export const getStaticProps = () =>
{
  return {
    props: {}
  }
}
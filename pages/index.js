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
        <title>Fahim Zada (Itfz1) Porfolio! - Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Fahim Zada"></meta>
        <meta name="description" content='Web App Lover who use effective and optimize approach to solve real world problems.' />
        <meta name="keywords" content='Fahim Zada, itsfz1, red apple, fahim zada web developer, fahim zada software engineer' />
        <meta property="og:image" content='/images/itsfz1.png' />
        <meta property="og:description" content='Web App Lover who use effective and optimize approach to solve real world problems.' />
        <meta property="og:title" content='Fahim Zada (Itfz1) Porfolio! - Welcome' />
        <meta property="twitter:image" content='/images/itsfz1.png' />
        <meta property="twitter:title" content='Fahim Zada (Itfz1) Porfolio! - Welcome' />
        <meta property="twitter:description" content='Web App Lover who use effective and optimize approach to solve real world problems.' />
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
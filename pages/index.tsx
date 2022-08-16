import type { NextPage } from 'next'
import clsx from 'clsx'
import Header from '../components/header/Header'
import Landing from '../components/landing/Landing'
import Footer from '../components/footer/Footer'

const IndexPage: NextPage = () => {
  return (
    <>
      <Header/>
      <Landing/>
      <Footer/>
    </>
  )
}

export default IndexPage;

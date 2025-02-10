import React from 'react'
import Banner from '../../components/Banner/Banner'
import WorkSheet from '../../components/WorkSheet/WorkSheet'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Rusume from '../../components/Resume/Rusume'

const Home = () => {
  return (
    <>
      <Banner/>
      <WorkSheet/>
      <About/>
      <Skills/>
      <Services/>
      <Rusume/>
    </>
  )
}

export default Home
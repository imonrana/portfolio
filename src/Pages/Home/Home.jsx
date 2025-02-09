import React from 'react'
import Banner from '../../components/Banner/Banner'
import WorkSheet from '../../components/WorkSheet/WorkSheet'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <WorkSheet/>
      <About/>
      <Skills/>
      <Services/>
    </div>
  )
}

export default Home
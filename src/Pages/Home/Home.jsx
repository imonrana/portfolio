import React from 'react'
import Banner from '../../components/Banner/Banner'
import WorkSheet from '../../components/WorkSheet/WorkSheet'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Rusume from '../../components/Resume/Rusume'
import Training from '../../components/Training/Training'
import Protfolio from '../../components/Protfolio/Protfolio'
import Testimonial from '../../components/Testimonial/Testimonial'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Banner/>
      <WorkSheet/>
      <About/>
      <Skills/>
      <Services/>
      <Rusume/>
      <Training/>
      <Protfolio/>
      <Testimonial/>
      <SkillsCard/>
      <Contact/>
    </>
  )
}

export default Home
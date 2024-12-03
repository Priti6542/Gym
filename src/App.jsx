import { useState } from 'react'
import Hero from './components/hero/Hero'

import './App.css'
import Programs from './components/programs/Programs'
import Reasons from './components/reasons/Reasons'
import Plans from './components/plans/Plans'
import Testinomials from './components/testinomials/Testinomials'
import Join from './components/join/Join'
import Footer from './components/Footer/footer'


function App() {

  return (
    <>

    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testinomials/>
    <Join/>
    <Footer/>
     
    </>
  )
}

export default App
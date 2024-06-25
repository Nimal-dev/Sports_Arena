import React from 'react'
import Header from '../Common/Header'
import HeroSection from '../Home_components/HeroSection'
import AboutUs from '../Home_components/AboutUs'
import Footer from '../Common/Footer'
import Register_select from '../Home_components/Register_select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Register_select/>
    <Footer/>
    </>
  )
}

export default LandingPage
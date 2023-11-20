import React from 'react'
import Header from "../LandingPage/Header/Header";
import CourseSection from "../LandingPage/CourseSection/CourseSection";
import CampusSection from "../LandingPage/CampusSection/CampusSection"
import FacilitiesSection from "../LandingPage/FacilitiesSection/FacilitiesSection"
import Footer from "../LandingPage/Footer/Footer"

export default function LandingPage() {
  return (

    <>
      <Header />
      <CourseSection />
      <CampusSection />
      <FacilitiesSection />


      <Footer />
    </>
  )
}
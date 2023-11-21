import React from 'react'
import Header from "./Header/Header";
import CourseSection from "./CourseSection/CourseSection";
import CampusSection from "./CampusSection/CampusSection"
import FacilitiesSection from "./FacilitiesSection/FacilitiesSection"
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection"
import CalltoActionSection from "./CalltoActionSection/CalltoActionSection"
import Footer from "./Footer/Footer"

export default function LandingPage() {
  return (
    <>
      <Header />
      <CourseSection />
      <CampusSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CalltoActionSection />
      <Footer />
    </>
  )
}
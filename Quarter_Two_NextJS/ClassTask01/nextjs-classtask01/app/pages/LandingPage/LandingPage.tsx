import React from 'react'
import Head from 'next/head';
import Header from "../LandingPage/Header/Header";
import CourseSection from "../LandingPage/CourseSection/CourseSection";
import CampusSection from "../LandingPage/CampusSection/CampusSection"
import FacilitiesSection from "../LandingPage/FacilitiesSection/FacilitiesSection"
import Footer from "../LandingPage/Footer/Footer"

export default function LandingPage() {
  return (

    <>
      <Head>
        <title>Your New Page Title</title>
      </Head>

      <Header />
      <CourseSection />
      <CampusSection />
      <FacilitiesSection />


      <Footer />
    </>
  )
}
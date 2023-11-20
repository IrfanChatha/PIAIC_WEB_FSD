import React from 'react'
import LandingPage from "./pages/LandingPage/LandingPage";
import CoursePage from "./pages/CoursePage/CoursePage"
import BlogPage from "./pages/BlogPage/BlogPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Irfan -- Xplore Skill',
}
export default function Home() {
  return (

    <>

      <LandingPage />
      <CoursePage />
      <BlogPage />
      <AboutPage />
    </>
  )
}

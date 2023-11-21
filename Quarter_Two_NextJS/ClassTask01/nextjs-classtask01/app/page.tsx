import React from 'react'
import LandingPage from "./pages/LandingPage/page";
import CoursePage from "./pages/CoursePage/page"
import BlogPage from "./pages/BlogPage/page"
import AboutPage from "./pages/AboutPage/page"
import ContactUsPage from "./pages/ContactUsPage/page"
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
      <ContactUsPage />
    </>
  )
}
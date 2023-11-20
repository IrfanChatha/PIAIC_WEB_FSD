import React from 'react'
import LandingPage from "./pages/LandingPage/LandingPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xplore Skill - Irfan',
}
export default function Home() {
  return (

    <>

      <LandingPage />

    </>
  )
}

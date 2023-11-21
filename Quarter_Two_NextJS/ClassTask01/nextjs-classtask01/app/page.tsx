import React from 'react'
import LandingPage from "./pages/LandingPage/page";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Irfan -- Xplore Skill',
}
export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  )
}
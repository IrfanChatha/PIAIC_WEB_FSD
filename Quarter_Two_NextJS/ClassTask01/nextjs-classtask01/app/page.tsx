import Head from 'next/head';
import Header from "./pages/Header/Header";
import CourseSection from "./pages/CourseSection/CourseSection";
import CampusSection from "./pages/CampusSection/CampusSection"
import FacilitiesSection from "./pages/FacilitiesSection/FacilitiesSection"
import Footer from "./pages/Footer/Footer"

export default function Home() {
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

import React from 'react'
import CourseHeaderSection from './CourseHeaderSection/CourseHeaderSection'
import CourseMainSection from './CourseMainSection/CourseMainSection'
import CourseBestSection from './CourseBestSection/CourseBestSection'
import Footer from '../LandingPage/Footer/Footer'

const CoursePage = () => {
    return (
        <>
            <CourseHeaderSection />
            <CourseMainSection />
            <CourseBestSection />
            <Footer />
        </>
    )
}

export default CoursePage

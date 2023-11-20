import Image from 'next/image'
import React from 'react'
import Course1 from '../../../img/course1.png'
import Course2 from '../../../img/course2.png'
import Course3 from '../../../img/course3.png'

const CourseBestSection = () => {
    return (
        <section className="facilities">
            <h1>Best Courses</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="facilities-col">
                    <Image alt="" src={Course1} style={{ height: "auto" }}/>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <Image alt="" src={Course2} style={{ height: "auto" }}/>
                    <h3>Artificial Intelligence</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <Image alt="" src={Course3} style={{ height: "auto" }}/>
                    <h3>Data Science</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CourseBestSection

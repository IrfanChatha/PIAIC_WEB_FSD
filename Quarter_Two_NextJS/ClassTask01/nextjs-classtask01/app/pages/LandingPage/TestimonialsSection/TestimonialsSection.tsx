import Image from 'next/image'
import React from 'react'
import Userimg from '../../../img/user.png'

const TestimonialsSection = () => {
    return (
        <section className="testimonials">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>What Our Student Says</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="testimonials-col">
                    <Image alt="oo.." src={Userimg} />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                            praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                            deserunt. In quia repellat maxime.</p>
                        <h3>Student Name</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="testimonials-col">
                    <Image alt="oo.." src={Userimg} />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                            praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                            deserunt. In quia repellat maxime.</p>
                        <h3>Student Name</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection

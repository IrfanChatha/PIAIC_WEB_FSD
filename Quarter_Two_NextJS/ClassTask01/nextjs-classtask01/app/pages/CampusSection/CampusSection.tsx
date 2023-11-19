import React from 'react'
import Image from 'next/image'
import Campus1 from '../../img/Campus1.png'
import Campus2 from '../../img/Campus2.png'
import Campus3 from '../../img/Campus3.png'

const CampusSection = () => {
    return (
        <section className="campus">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>TAKE OUR VIRTUAL TOUR</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="campus-col">
                    <Image alt="Campus1" src={Campus1} width="" height="" style={{ height: "auto" }} />
                    <div className="layer">
                        <h3>DELHI</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <Image alt="Campus1" src={Campus2} width="" height="" style={{ height: "auto" }} />
                    <div className="layer">
                        <h3>HYDERABAD</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <Image alt="Campus1" src={Campus3} width="" height="" style={{ height: "auto" }} />
                    <div className="layer">
                        <h3>MUMBAI</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CampusSection
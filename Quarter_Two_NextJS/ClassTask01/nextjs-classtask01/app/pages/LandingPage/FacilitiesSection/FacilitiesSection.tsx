import React from 'react'
import Image from 'next/image'
import Library from '../../../img/libary.png'
import Playground from '../../../img/playground.png'
import Food from '../../../img/food.png'

const FacilitiesSection = () => {
    return (
        <section className="facilities">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="facilities-col">
                    <Image alt="Library" src={Library} style={{ height: "auto" }} />
                    <h3>Best Libary</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <Image alt="Playground" src={Playground} style={{ height: "auto" }} />
                    <h3>Athletics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <Image alt="Food" src={Food} style={{ height: "auto" }} />
                    <h3>Tasty and Healthy Food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FacilitiesSection
import React from 'react'

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
                    <img src="../../img/libary.png" alt="" />
                    <h3>Best Libary</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <img src="../../img/playground.png" alt="" />
                    <h3>Athletics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <img src="../../img/food.png" alt="" />
                    <h3>Tasty and Healthy Food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FacilitiesSection
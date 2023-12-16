import React from 'react'
import image2 from '../../assests/Images/image 1.png'
import image1 from '../../assests/Images/image 2.png'
import './feature.css'
import Button from '../../components/button/button'

export default function Feauter() {
    return (
        <div class="features">
            <div class="row">
                <div class="img-col">
                    <img src={image1} alt="" />
                </div>
                <div class="text-col">
                    <h2>Web & Mobile App Development</h2>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which
                        tailor content and engagement methods to respond to different intents shown by your potential customers
                        who interact with your business online.</p>
                    <div className="header-button">
                        <Button quote={'Learn more'} />
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="text-col" >
                    <h2>Digital Strategy Consulting</h2>
                    <p> Your digital strategy should complement the overall marketing strategy of the company. In online marketing,
                        each component will never work in isolation and every business needs a different mix. We provide a clear
                        concept and strategic overview to find the most efficient model for your business.</p>
                    <Button quote={'Learn more'} />
                </div>
                <div class="img-col">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    )
}

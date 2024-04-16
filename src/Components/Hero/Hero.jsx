import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import Calories from "../../assets/calories.png"
import Heart from "../../assets/heart.png"
import hero_image_back from "../../assets/hero_image_back.png"

function Hero() {
  return (
   
    <div className='hero'>
           
      <div className='blur hero-blur'></div>
        < div className="left-h">
           <Header/>
           {/* the best add */}
           <div className="the-best-add">
            <div></div>
            <span>the best clube in the town </span>

           </div>
    {/* the hero heading start from here */}
        <div className="text-hero">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>your</span>
            </div>
            <div>
                <span>
                    Ideal body
                </span>
            </div>

            <div><span>
                in here we will help you to sape and build your ideal body and liveup you life to fullest
            </span></div>

            </div>
        {/*    figures  */}

        <div className="fegures">
            <div>
                 <span>140+</span> 
                 <span>expercoaches</span>
            </div>
            <div>
                 <span>+178</span> 
                 <span>members joines</span>
            </div>
            <div>
                 <span>+50</span> 
                 <span>fitness programs</span>
            </div>

            </div>
            {/*  hero-button    */}

            <div className="hero-button">
                <button className="btn">Get stared</button>
                <button className="btn">Learn More</button>
            </div>
       
       </div>
        
       <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate </span><span>bpm</span>
        </div>


        {/* hero images  */}
       <img src={hero_image} alt=""  className='hero_image'/>
       <img src={hero_image_back} alt="" className='hero_image_back' />
       
       {/*  calories  */}
        <div className="calories">
            <img src={Calories} alt="" />
            <div>
                <span> caloriesburned </span>
                <span>220 kcal</span>
            </div>
        </div>



        
       </div>
     </div>
)
}

export default Hero;

import React from 'react'
import './Program.css'
import { programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

function Program() {
  return (
    <div className='Programs' id="programs">
      {/* header   */}
      <div className="program-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shap you</span>
      </div>

      <div className="program-categories">
        {
            programsData.map((program)=>(
               <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span >{program.details}</span>
                <div className='join-now'><span>Join Now</span>
                <img src={RightArrow} alt="" />
                </div>
               </div>
            ))
        }
      </div>
    </div>
  )
}

export default Program

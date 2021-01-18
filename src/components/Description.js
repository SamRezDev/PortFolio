import React from 'react'
import "./Description.css"
import SamPic from "../imgs/picturesam.png"
export default function Description() {
    return (
        <div className ="DescriptionCont" id="Description">
           
            <div className="DescText"> 
            <p> Hello!  Sami  here :D  <br/>
                Here to make your website ideas become reality  <i className="fas fa-code"></i>
            <br/>  </p>
            
            
            <div className="DescMini"> 
            <h5>ABOUT ME  </h5>  <img id="PersonalPic" src={SamPic} alt="PersonalPic"/> <div className= "DescTextMini">I'm a <span> Front-end Web Developer </span>and holder of a master's degree in Software engineering <br/> 
            <span> Always motivated</span> to learn  new things and apply them so that i can help people achieve the objective they're aiming for  </div>
            
            
            </div>   </div> 
        </div>
    )
}

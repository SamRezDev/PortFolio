import React from 'react'
import "./Skill.css"
export default function Skill(props) {
    const Base= "fab fa-"
    var IconName = Base.concat(props.iconName)
    return (
        <div className="Skill" style={{fontSize: props.size}}>

        <div> {props.title} <i className={IconName} style={{color:props.color }} ></i></div>
           


        </div>
    )
}

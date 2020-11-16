import React from 'react'
import "./Skill.css"
export default function Skill(props) {
    if (props.iconName.localeCompare("spell-check")=== 0)
       {
        const Base= "fas fa-"
        var IconName = Base.concat(props.iconName)
         }else {
            const Base= "fab fa-"
            var IconName = Base.concat(props.iconName)
         }

    return (
        <div className="Skill" style={{fontSize: props.size}}>

        <div> {props.title} <i className={IconName} style={{color:props.color }} ></i></div>
           


        </div>
    )
}

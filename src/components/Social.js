import React from 'react'
import "./Social.css"
export default function Social(props) {
    const Base= "fab fa-"
    var IconName = Base.concat(props.iconName)
    return (
        <div>
             <a href={props.link}> <i id="FooterIcons"className={IconName}></i></a>  
        </div>
    )
}

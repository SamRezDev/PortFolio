import React from 'react'
import Skill from './Skill.js'
import "./Skills.css"
export default function Skills() {
    return (
        <div >
              <h1>Languages and technologies that i use</h1>
              <div  id="Skills" className="SkillsContainer">
              <Skill title="JS" iconName="js" color="#F0DB4F"/>
            <Skill title="HTML5" iconName="html5" color ="#E44D26"/>
            <Skill title="CSS3" iconName="css3-alt" color="#264de4 "/>
           
            <Skill title="REACT" iconName="react" color="#61DBFB"/>
           
            <Skill title="Git" iconName="github" color='black' />
            <Skill title="Bootstrap" iconName="bootstrap" color="#080135" />
            </div>
            <h1>Spoken languages</h1>
            <div id="Skills"className = "LangContainer">
            <Skill title="ENGLISH" size="38px" />
            <Skill title="FRENCH" size="38px" />
            <Skill title="ARABIC"  size="38px"/>
            </div>
        </div>
    )
}

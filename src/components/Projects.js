import React from 'react'
import Project from './Project.js'
import "./Projects.css"
import {ProjectsArray as ProjectArray} from "../Data/ProjectsArray.js"
export default function Projects() {
  const Length =  ProjectArray.length % 2
    return (
        <div id="MyProj">
              <h1>  My latest projects  </h1>
           
             <div class="Projects">
          { ProjectArray.map ( (element) => 
            {
                return  <Project title={element.Title} description={element.Description}
                image={element.linkImage}
                linkGit={element.linkGit}
                linkPreview={element.linkPreview}/>
            }
           
           )}
           {
              Length === 1 ?    <div className="AndMoreContainer">
              More upcoming..
   
              </div> : ""
           }
         
            
          
            </div>
        </div>
    )
}

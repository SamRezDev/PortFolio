import React from 'react'
import Project from './Project.js'
import "./Projects.css"
import img1 from "../imgs/TruestOfSights.png"
import img2 from "../imgs/LandingPage.png"
export default function Projects() {
    return (
        <div id="MyProj">
              <h1>  My latest projects  </h1>
           
             <div class="Projects">
            <Project title="TruestOfSights" description="A Small web app using OpenDotaAPI to fetch some hidden stats about the game DOTA 2 "
            image={img1}
            linkGit="https://github.com/SamRezDev/truest_of_sights"
            linkPreview="https://samrezdev.github.io/truest_of_sights/"/>
            <Project linkGit="https://github.com/SamRezDev/splashtest"
            linkPreview="https://samrezdev.github.io/splashtest/"
            title="Landing page for a business " description="A landing page with different sections ,made using ReactJS" image={img2}/>
            
            </div>
        </div>
    )
}

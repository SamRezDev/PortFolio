import React from 'react'
import "./Project.css"

export default function Project(props) {

    
    return (
        <div className ="Project">
              <div className="Title">{props.title}</div>
              <div className="Description">{props.description}</div>
              <div className="PreviewSection"><img src={props.image}/><div>
              <a className="GitHubMess" href={props.linkGit} target="_blank"><i className="fab fa-github"></i>  Check on Github</a>
              <a className="LeaveSite" href={props.linkPreview} target="_blank" > <i className="fas fa-external-link-alt"></i> Preview 
              
              </a> </div>
              </div>
        </div>
    )
}

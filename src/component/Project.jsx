import React from "react";

function Project(props){
    return(
        <a href={props.link} className="project-link">
        <div className="box-cover">
            <div className="box project-box">
                <img src={props.src} className="project-img"/>
                <div className="project-content">
                    <p className="project-head">{props.head}</p>
                    <p className="project-desc">{props.desc}</p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default Project;
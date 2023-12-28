import React from "react";

function Skill(props){
    return(
        <div className="box-cover">
            <div className="box skill-box">
                <img src={props.src} className="skill-img"/>
                <p className="skill-name">{props.name}</p>
            </div>
        </div>
    )
}

export default Skill;
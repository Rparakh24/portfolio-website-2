import React from "react";

function POR(props){
    return(
        <div className="box-cover">
            <div className="box por-box">
                <img src={props.src} className="por-img" />
                <div className="por-content">
                    <p className="por-head">{props.name}</p>
                    <p className="por-post">{props.post}</p>
                    <p className="por-content">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default POR;
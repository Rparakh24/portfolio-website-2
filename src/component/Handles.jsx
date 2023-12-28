import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Handles(props){
    return(
        <div className="handles">
            <a href="https://www.linkedin.com/in/ronit-parakh/" className="handles-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/Rparakh24/" className="handles-icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/ronit_parakh/" className="handles-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    );
}

export default Handles;
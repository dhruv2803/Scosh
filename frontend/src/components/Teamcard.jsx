import React from "react";
import facebook from "../images/Facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
const Teamcard = ({
    name,
    image,
    designation,
    socialfacbook,
    socialtwitter,
    sociallinkedin,
    socialinsta,
}) => {
    return (
        <div className="team_card">
            <div className="team_image">
                <img src={image} alt="" />
            </div>
            <div className="team_name">
                <h3>{name}</h3>
                <p>{designation}</p>
                <div className="teams_social">
                    <a href={socialfacbook}>
                        <img className="logo" src={facebook} />
                    </a>
                    <a href={socialtwitter}>
                        <img className="logo" src={twitter} />
                    </a>
                    <a href={sociallinkedin}>
                        <img className="logo" src={linkedin} />
                    </a>
                    <a href={socialinsta}>
                        <img className="logo" src={instagram} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Teamcard;

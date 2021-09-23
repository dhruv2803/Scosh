import React from "react";
import facebook from "../images/Facebook.svg";
import gmail from "../images/gmail.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
const Teamcard = ({
    name,
    image,
    designation,
    socialfacbook,
    socialemail,
    sociallinkedin,
    socialinsta,
}) => {
    return (
        <div className="team_card">
            <div className="team_image">
                <img
                    className="team_imageurl"
                    src={image ? image.url : "https://picsum.photos/350"}
                    alt="photo"
                />
            </div>
            <div className="team_name">
                <h3>{name}</h3>
                <p>{designation}</p>
                <div className="teams_social">
                    {socialfacbook != "-" ? (
                        <a href={socialfacbook}>
                            <img className="logo" src={facebook} />
                        </a>
                    ) : (
                        <></>
                    )}

                    {socialemail != "-" ? (
                        <a href={`mailto:${socialemail}`}>
                            <img className="logo" src={gmail} />
                        </a>
                    ) : (
                        <></>
                    )}
                    {sociallinkedin != "-" ? (
                        <a href={sociallinkedin}>
                            <img className="logo" src={linkedin} />
                        </a>
                    ) : (
                        <></>
                    )}
                    {socialinsta != "-" ? (
                        <a href={socialinsta}>
                            <img className="logo" src={instagram} />
                        </a>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Teamcard;

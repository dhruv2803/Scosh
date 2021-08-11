import React from "react";
import "./Details.css";
// import aboutUs from "../images/about_us.svg";
const Details = ({ image, alter, heading, description }) => {
    return (
        <div className="Details">
            <img className="Details_image" src={image} alt={alter} />
            <div className="Details_heading">{heading}</div>
            <div className="Details_description">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Details;

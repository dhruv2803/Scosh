import React from "react";
import "./Card.css";
const Card = ({ size, clr, image, title, body }) => {
    // props are size : {small,large} ,clr :{pink,yellow} ,image:{image of card} ,title and boody
    return (
        <div className={`card ${size}`}>
            <div className={`card_imageContainer ${clr}`}>
                <img src={image} className="card_image" alt="" />
            </div>
            <div className="card_details">
                <h3 className="card_title">{title}</h3>
                <p className="card_description">{body}</p>
            </div>
        </div>
    );
};

export default Card;

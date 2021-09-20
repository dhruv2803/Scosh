import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

const Card = ({ eventLink, blogId, size, clr, image, title, body }) => {
    const history = useHistory();
    // props are size : {small,large} ,clr :{pink,yellow} ,image:{image of card} ,title and boody
    return (
        <div
            className={`card ${size}`}
            style={{
                borderRadius: "16px",
            }}
            onClick={() => {
                if (eventLink === "https://www.google.com") {
                    window.location.href = eventLink;
                } else {
                    console.log("here");
                    history.push(`/blog/${blogId}`);
                }
                return true;
            }}
        >
            <div
                className={`card_imageContainer `}
                style={{
                    backgroundImage: `url(${image}) `,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="card_details">
                <h3 className="card_title">
                    <b>{title}</b>
                </h3>
                {/* <p className="card_description">{body.substring(0, 100)}</p> */}
                <div
                            dangerouslySetInnerHTML={{ __html: body.substring(0, 100) }}
                        />
            </div>
        </div>
    );
};

export default Card;

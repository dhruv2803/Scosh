import React, { useState } from "react";
import EventCardCSS from "./EventCard.module.css";

export default function EventCard(props) {
    const { title, body, img, registerLink, isOver } = props;
    const [read, setRead] = useState(false);
    return (
        <div className={EventCardCSS.root}>
            <div className={EventCardCSS.card}>
                <img
                    src={img.url ?? "https://picsum.photos/400"}
                    alt="event"
                    className={EventCardCSS.imgClass}
                />
                <div className={EventCardCSS.cardContent}>
                    <div>
                        <h1>{title ?? "Title"}</h1>
                        <p
                            onClick={() => {
                                setRead(!read);
                            }}
                        >
                            {read ? body : body.slice(0, 200)}
                            {read ? <u>Read less...</u> : <u>Read more...</u>}
                        </p>
                    </div>
                    <div className={EventCardCSS.actions}>
                        {isOver ? (
                            <></>
                        ) : (
                            <button
                                className={EventCardCSS.registerBtn}
                                onClick={() =>
                                    (window.location.href = registerLink)
                                }
                            >
                                Register
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

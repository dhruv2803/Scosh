import React from "react";
import EventCardCSS from "./EventCard.module.css";

export default function EventCard(props) {
    const { title, body, img } = props;
    return (
        <div className={EventCardCSS.root}>
            <div className={EventCardCSS.card}>
                <img src={img ?? "https://picsum.photos/400"} alt="event" />
                <div className={EventCardCSS.cardContent}>
                    <div>
                        <h1>{title ?? "Title"}</h1>
                        <p>
                            {body ??
                                "Lorem ipsum dolor sit amet consectetur, adipisicing \
                            elit. Ratione laborum quas delectus sequi? Debitis \
                            accusantium, ut rerum accusamus cumque laboriosam."}
                        </p>
                    </div>
                    <div className={EventCardCSS.actions}>
                        <button className={EventCardCSS.registerBtn}>
                            Register
                        </button>
                        <button className={EventCardCSS.moreBtn}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

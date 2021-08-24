import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card";
import "./Eventdetail.css";
const Eventdetail = () => {
    let carddetails = [
        {
            title: "Title",
            body: "Body",
            size: "small",
            clr: "pink",
        },
    ];
    return (
        <div className="eventdetail">
            <Container>
                <div className="eventdetail_header">BLOGS</div>
                <div className="eventdetail_cardContainer">
                    <div className="eventdetail_cards">
                        <Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            title={carddetails[0].title}
                            body={carddetails[0].body}
                            image="https://picsum.photos/200"
                        />
                        <Card
                            size={carddetails[0].size}
                            clr="yellow"
                            title={carddetails[0].title}
                            body={carddetails[0].body}
                            image="https://picsum.photos/200"
                        />
                    </div>
                    <div className="blogs_cards">
                        <Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            title={carddetails[0].title}
                            body={carddetails[0].body}
                            image="https://picsum.photos/200"
                        />
                        <Card
                            size={carddetails[0].size}
                            clr="yellow"
                            title={carddetails[0].title}
                            body={carddetails[0].body}
                            image="https://picsum.photos/200"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Eventdetail;

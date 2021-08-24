import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card";
import "./Blogdetail.css";
const Blogdetail = () => {
    let carddetails = [
        {
            title: "Title",
            body: "Body",
            size: "small",
            clr: "pink",
        },
    ];
    return (
        <div className="blogdetail">
            <Container>
                <div className="blogdetail_header">BLOGS</div>
                <div className="blogdetail_cardContainer">
                    <div className="blogdetail_cardContainer1">
                        <Card
                            size="large"
                            clr={carddetails[0].clr}
                            title={carddetails[0].title}
                            body={carddetails[0].body}
                            image="https://picsum.photos/200"
                        />
                    </div>
                    <div className="blogdetail_cardContainer2">
                        <div className="blogdetail_cards">
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
                </div>
            </Container>
        </div>
    );
};

export default Blogdetail;

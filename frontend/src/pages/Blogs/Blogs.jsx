import React from "react";
import { Container } from "react-bootstrap";
import Card from "../../components/Card";
import "./Blogs.css";
const Blogs = () => {
    let carddetails = [
        {
            title: "Title",
            body: "Body",
            size: "medium",
            clr: "pink",
        },
    ];
    return (
        <div className="blogs_root">
            <Container>
                <div className="blogs_header">BLOGS</div>
                <div className="blogs_cardContainer">
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

export default Blogs;

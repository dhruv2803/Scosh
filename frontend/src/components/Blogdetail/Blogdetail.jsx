import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Card from "../Card";
import "./Blogdetail.css";
import axios from "axios";
import constants from "../../constants.json";

const Blogdetail = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(constants.baseURL + "/blogs/recent")
            .then((res) => setBlogData(res.data))
            .then((_) => setLoading(false))
            .catch((err) => console.error(err));
    }, []);

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
                    {loading ? (
                        <div>
                            <Spinner
                                animation="border"
                                style={{ color: "white" }}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="blogdetail_cardContainer1">
                                <Card
                                    size="large"
                                    clr={carddetails[0].clr}
                                    blogId={blogData[0]._id}
                                    title={blogData[0].title}
                                    body=""
                                    image={
                                        blogData[0].images.length !== 0
                                            ? blogData[0].images[0].url
                                            : "https://picsum.photos/200"
                                    }
                                />
                            </div>
                            <div className="blogdetail_cardContainer2">
                                <div className="blogdetail_cards">
                                    <Card
                                        size={carddetails[0].size}
                                        clr={carddetails[0].clr}
                                        blogId={blogData[1]._id}
                                        title={blogData[1].title}
                                        body=""
                                        image={
                                            blogData[1].images.length !== 0
                                                ? blogData[1].images[0].url
                                                : "https://picsum.photos/200"
                                        }
                                    />
                                    <Card
                                        size={carddetails[0].size}
                                        clr="yellow"
                                        title={blogData[2].title}
                                        body=""
                                        image={
                                            blogData[2].images.length !== 0
                                                ? blogData[2].images[0].url
                                                : "https://picsum.photos/200"
                                        }
                                    />
                                </div>
                                <div className="blogdetail_cards">
                                    <Card
                                        size={carddetails[0].size}
                                        clr={carddetails[0].clr}
                                        blogId={blogData[3]._id}
                                        title={blogData[3].title}
                                        body=""
                                        image={
                                            blogData[3].images.length !== 0
                                                ? blogData[3].images[0].url
                                                : "https://picsum.photos/200"
                                        }
                                    />
                                    <Card
                                        size={carddetails[0].size}
                                        clr="yellow"
                                        blogId={blogData[4]._id}
                                        title={blogData[4].title}
                                        body=""
                                        image={
                                            blogData[4].images.length !== 0
                                                ? blogData[4].images[0].url
                                                : "https://picsum.photos/200"
                                        }
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Blogdetail;

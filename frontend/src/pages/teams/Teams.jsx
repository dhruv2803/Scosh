import React, { useState } from "react";
import "./Teams.css";
import { Container } from "react-bootstrap";

import TeamCarousal from "../../components/TeamCarousal";

const Teams = () => {
    const [details, setDetails] = useState([]);
    // let details = [
    //     {
    //         heading: "2020",
    //         decription: [
    //             {
    //                 name: "Dhruv",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //             {
    //                 name: "Dhruv",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //             {
    //                 name: "Dhruv",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //         ],
    //     },
    //     {
    //         heading: "2019",
    //         decription: [
    //             {
    //                 name: "Scosh",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //             {
    //                 name: "Scosh",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //             {
    //                 name: "Scosh",
    //                 image: "https://picsum.photos/350",
    //                 designation: "designation",
    //                 socialfacbook: "/",
    //                 socialtwitter: "/",
    //                 sociallinkedin: "/",
    //                 socialinsta: "/",
    //             },
    //         ],
    //     },
    // ];
    return (
        <div className="teams">
            <Container style={{ width: "80vw" }}>
                <div className="teams_header">OUR TEAM</div>
                {details.map((detail) => (
                    <TeamCarousal
                        heading={detail.heading}
                        details={detail.decription}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Teams;

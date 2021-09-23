import React, { useEffect, useState } from "react";
import "./Teams.css";
import axios from "axios";

import constants from "../../constants.json";
import { Container, Spinner } from "react-bootstrap";

import TeamCarousal from "../../components/TeamCarousal";

const Teams = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState("2021");
    let yearwise = [];
    function addData(yearwise, year) {
        console.log("Add data start");
        let arr = [];
        yearwise?.forEach((ele) => {
            let obj = {};
            obj.name = ele.name;
            obj.image = ele.image;
            obj.designation = ele.designation;
            obj.socialfacbook = ele.facebook;
            obj.socialemail = ele.email;
            // console.log(ele.email);
            obj.sociallinkedin = ele.linkedin;
            obj.socialinsta = ele.insta;
            arr.push(obj);
        });
        let newdetails = [];
        newdetails.push({ heading: year, decription: arr });
        setDetails(newdetails);
        console.log(details);

        console.log("add data ended");
    }

    useEffect(() => {
        axios
            .get(constants.baseURL + `/teams/yearwise?y=${year}`)
            .then((res) => {
                console.log(res.data);
                yearwise = res.data;
                // setDetails(res.data);
                // console.log(details);
            })
            .then((_) => addData(yearwise, year))
            .then((_) => setLoading(false))
            .catch((err) => console.log(err));
    }, [year]);

    return (
        <div className="teams">
            <Container style={{ width: "80vw" }}>
                <div className="teams_header">OUR TEAM</div>

                {/* {console.log(details[0])} */}
                <div className="carousel_heading">
                    {" "}
                    <select
                        onChange={(e) => setYear(e.target.value)}
                        className="carousel_headingOptions"
                    >
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                    </select>{" "}
                </div>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Spinner
                            animation="border"
                            style={{ color: "white" }}
                        />
                    </div>
                ) : (
                    <>
                        <TeamCarousal
                            heading={details[0]?.heading}
                            det={details[0]?.decription}
                        />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Teams;

import React from "react";
import EventsCSS from "./Events.module.css";
import { Container, Spinner } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";
import constants from "../../constants.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(constants.baseURL + "/events?page=" + page)
            .then((res) => {
                console.log(res.data);
                setEvents(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
    useEffect(() => {
        if (events.length !== 0) {
            setLoading(false);
        }
    }, [events]);
    return (
        <div className={EventsCSS.root}>
            <Container>
                <div className={EventsCSS.header}>EVENTS</div>

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
                    <div className={EventsCSS.cardContainer}>
                        {events.map((event) => (
                            <EventCard
                                title={event.name}
                                body={event.description}
                                img={event.image}
                                registerLink={event.register}
                                isOver={event.isOver}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

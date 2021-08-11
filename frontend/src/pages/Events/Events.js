import React from "react";
import EventsCSS from "./Events.module.css";
import { Container } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard";

export default function Events() {
    return (
        <div className={EventsCSS.root}>
            <Container>
                <div className={EventsCSS.header}>EVENTS</div>
                <div className={EventsCSS.cardContainer}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </Container>
        </div>
    );
}

import React from "react";
import WorkshopsCSS from "./Workshops.module.css";
import { Container } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard";

export default function Workshops() {
    return (
        <div className={WorkshopsCSS.root}>
            <Container>
                <div className={WorkshopsCSS.header}>WORKSHOPS</div>
                <div className={WorkshopsCSS.cardContainer}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </Container>
        </div>
    );
}

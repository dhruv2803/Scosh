import React from "react";
import Details from "../components/Details";
import aboutUs from "../images/about_us.svg";
import ourVision from "../images/our_vision.svg";
import ourMission from "../images/our_mission.svg";
import svnitLogo from "../images/svnit.svg";
const ScoshDetails = () => {
    const aboutus = {
        alter: "about us",
        heading: "About Us",
        description:
            "The Society for Cultivation of Science and Humanities (SCOSH) is a student chapter of SVNIT that aims to develop and nurture scientific temperament among students. We conduct various events year-round to instil the culture of science entertainingly. ",
    };
    const ourvision = {
        alter: "over vision",
        heading: "Our Vision",
        description:
            'Our main aim is to build a human stack-exchange and thus build a strong scientific community across the nation. With our guiding motto, "small steps make a big one" we carry forward our goal of creating a scientific society with a great team.',
    };
    const ourmission = {
        alter: "over mission",
        heading: "Our Mission",
        description:
            "At SCOSH, we integrate our passion for science with other skills such as content writing, management, administration and technical skills. SCOSH has been a witness to many great journeys that started here with a small step and we look forward to being a part of many more.",
    };
    const svnit = {
        alter: "svnit",
        heading: "SVNIT",
        description: `Sardar Vallabhbhai National Institute of Technology, Surat popularly known as National Institute of Technology, Surat, NIT Surat or SVNIT, is an engineering institute of higher education established by the Parliament of India in 1961.It's mission is- "To be a globally accepted centre of excellence in technical education catalysing absorption, innovation, diffusion and transfer of high technologies resulting in enhanced quality for all the stake holders"`,
    };
    return (
        <div>
            <Details
                image={aboutUs}
                alter={aboutus.alter}
                heading={aboutus.heading}
                description={aboutus.description}
            />
            <Details
                image={ourVision}
                alter={ourvision.alter}
                heading={ourvision.heading}
                description={ourvision.description}
            />
            <Details
                image={ourMission}
                alter={ourmission.alter}
                heading={ourmission.heading}
                description={ourmission.description}
            />
            <Details
                image={svnitLogo}
                alter={svnit.alter}
                heading={svnit.heading}
                description={svnit.description}
            />
        </div>
    );
};

export default ScoshDetails;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teamcard from "./Teamcard";
const TeamCarousal = ({ heading, details }) => {
    // console.log(props);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div style={{ paddingBottom: "50px" }}>
            <div className="carousel_heading"> {heading} </div>
            <Slider {...settings}>
                {details.map((detail) => (
                    <div>
                        <Teamcard
                            name={detail.name}
                            image={detail.image}
                            designation={detail.designation}
                            socialfacbook={detail.socialfacbook}
                            socialtwitter={detail.socialtwitter}
                            sociallinkedin={detail.sociallinkedin}
                            socialinsta={detail.socialinsta}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamCarousal;

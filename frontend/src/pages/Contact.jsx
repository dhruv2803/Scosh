import React from "react";
import "./Contact.css";
import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
import emailjs from "emailjs-com";
const Contact = () => {
    function sendEmail(e) {
        console.log(e);
        e.preventDefault();

        emailjs
            .sendForm(
                "service_lxwssuu",
                "template_n401l1d",
                e.target,
                "user_yvvqQsMVgSmWC5TiXj5Pm"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className="contact">
            <div className="contact_heading">LET’S GET TO KNOW EACH OTHER</div>
            <div className="contact_subheading">
                Fill in the details below and let’s get this conversation going
            </div>
            <form className="contact_form" onSubmit={sendEmail}>
                <input type="text" name="name" id="name" placeholder="Name*" />
                <input
                    type="text"
                    name="institute"
                    id="institute"
                    placeholder="Institute/Organization*"
                />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email*"
                />
                <textarea
                    className="contact_msg"
                    placeholder="Your Message..."
                    name="msg"
                    id="msg"
                ></textarea>

                <button className="contact_button">Send Message</button>
            </form>
            <div className="contact_otherMethod">
                <p>OR</p>
                <p>
                    Contact Us at: <img src={linkedin} alt="linked in" />{" "}
                    <img src={gmail} alt="gmail" />
                </p>
            </div>
        </div>
    );
};

export default Contact;

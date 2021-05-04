import React from 'react';
import {
FaEnvelope, 
// FaPhone,
// FaSkype,
FaTwitter,
// FaDribbble,
// FaFacebookF, 
FaLinkedin} from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT ME"
                    subTitle="Ways To Contact Me"
                    desc="Feel free to reach out for any jobs."
                />
            </div>
            <div className="container mt-45">
                <div className="row md-justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaEnvelope/></i>
                            </div>
                            <a className="btn-animation" href="mailto:hello@clarkglewis.com">hello@clarkglewis.com</a>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaPhone/></i>
                            </div>
                            <a className="btn-animation" href="https://themeforest.net/user/tortoiz">+1 (818) 2489 XX</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaSkype/></i>
                            </div>
                            <a className="btn-animation" href="https://themeforest.net/user/tortoiz">live:shail_</a>
                        </div>
                    </div> */}
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaTwitter /></i>
                            </div>
                            <a className="btn-animation" href="https://twitter.com/clewis890">@clewis890</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaLinkedin /></i>
                            </div>
                            <a className="btn-animation" href="https://linkedin.com/in/clark-lewis">Clark Lewis</a>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaDribbble /></i>
                            </div>
                            <a className="btn-animation" href="https://themeforest.net/user/tortoiz">Tortoiz</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaFacebookF /></i>
                            </div>
                            <a className="btn-animation" href="https://www.facebook.com/tortoizthemes">Tortoizthemes</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

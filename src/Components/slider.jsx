import React from 'react';
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import sliderImg01 from "../assets/images/slider/clark.jpg";
import { 
FaLongArrowAltLeft, 
FaLongArrowAltRight,
// FaLongArrowAltDown
 } from "react-icons/fa";

import { Link } from 'react-scroll';

export default function slider() {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            >
            <FaLongArrowAltLeft/>
            </div>
        );
    }
    const SampleNextvArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            >
            <FaLongArrowAltRight/>
            </div>
        );
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        padding: 20,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextvArrow/>
    }
    return (
        <div className="container"> 
            <div className="slider-area">
                <div className="slider-activator">
                    <Slider {...settings}>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1 style={{ '@media (max-width: 550px)': { fontSize: '1.7em' } }}>Clark <br /> Lewis<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.github.com/clewis890">GitHub</a> | <a
                                                    href="https://www.linkedin.com/in/clark-lewis">LinkedIn</a> <br />
                                                {/* <a href="https://behance.net/tortoizthemes">Behance</a> | <a
                                                    href="https://dribbble.com/TortoizTeam">Dribbble</a> */}
                                            </div>
                                            <div className="slider-cta"    
                                            style={{ '@media (max-width: 550px)': { fontSize: '0.6em', width: '50px' } }}
>
                                                <Link 
                                                to="contact" 
                                                className="ct-btn" 
                                                smooth={true} 
                                                duration={2000} 
                                                activeClass="active" 
                                                spy={false} 
                                                offset={5}>Contact me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img 
                                            className="img-fluid" 
                                            src={sliderImg01} alt="Clark Lewis" 
                                            style={{ borderRadius: '50px',  boxShadow: '0px 1px 10px #222',  }} />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>Front End Web <br />  Developer</h2>
                                                <p className="pr-20">
                                                    I am a self-taught Web Developer. I utilize Reactjs, Nextjs and Material UI in my projects,
                                                    and at the moment, am learning MongoDB and Express.js for back-end development.
                                                </p>
                                            </div>
                                            {/* <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Learn more &nbsp; <i><FaLongArrowAltDown /></i></Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </Slider>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
// import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
// import servicIcon_02 from "../assets/images/icons/code.png";
// import servicIcon_03 from "../assets/images/icons/search-yellow.png";
// import servicIcon_04 from "../assets/images/icons/marketing.png";
// import servicIcon_05 from "../assets/images/icons/code-white.png";
// import servicIcon_06 from "../assets/images/icons/marketing-white.png";

import reactlogo from "../assets/images/icons/logo192.png"
import nextjs from "../assets/images/icons/nextjs.png"
import podcast from "../assets/images/icons/podcast3.svg"
import materialui from "../assets/images/logo/materialui.png"

// import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";

export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    // title="SERVICES"
                    subTitle="What I Bring to the Table"
                    desc="Because I am self-taught, I learn fast and am constantly seeking to expand my skill set, in order to meet client's needs. I have been producing my podcast, The Mate Guys, with my co-host Stephen since 2016. I am committed to develop and grow as a programmer. "
                />
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp" style={{ boxShadow: '0 2px 8px grey', borderRadius: '8px', backgroundColor: '#010101' }}>
                            <div className="icon mb-20">
                                <img src={reactlogo} alt="design" style={{ backgroundColor: '#010101', width: '100%' }} />
                                {/* <img className="d-none" src={reactlogo} alt="design" /> */}
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">ReactJS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp" style={{ boxShadow: '0 2px 8px grey', borderRadius: '8px', backgroundColor: '#fff' }}>
                            <div className="icon mb-20">
                                <img src={nextjs} alt="next js" style={{ width: '100%' }}  />
                                {/* <img className="d-none" src={servicIcon_02} alt="next js" style={{ width: '40%' }} /> */}
                            </div>
                            <div className="skill-project">
                                {/* <h4 className="mb-3">NextJS</h4> */}
                                {/* <p>221 projects</p> */}
                            </div>
                        </div>
                    </div>
                     <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp" style={{ boxShadow: '0 2px 8px grey', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
                            <div className="icon mb-20">
                                <img src={podcast} alt="podcast" style={{ height: '80%', width: '100%', color: 'white' }} />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Podcast</h4>
                                {/* <p>331 projects</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp" style={{ boxShadow: '0 2px 8px grey', borderRadius: '8px', backgroundColor: '#010101'  }}>
                            <div className="icon mb-20">
                                <img src={materialui} alt="Material UI" style={{ width: '50%' }} />
                                {/* <img className="d-none" src={servicIcon_03} alt="design" /> */}
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Material UI</h4>
                                {/* <p>450 projects</p> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto', flexDirection: 'column' }}>
                <h4 style={{ margin: '40px auto', width: 'fit-content', color: 'lightslategray' }}>Languages I speak:</h4>
                        <p style={{ margin: '0 auto', fontSize: '1.2em' }}>HTML, CSS, Sass, JavaScript, ReactJS, NextJS</p>
                {/* <h4 style={{ margin: '40px auto', width: 'fit-content', color: 'lightslategray' }}>Dev Tools I use:</h4>
                        <p style={{ margin: '0 auto', fontSize: '1.2em' }}>GitHub, Terminal, VS Code</p> */}
                </div>
            </div>
            <div className="counter-area mt-45">
                <div className="container">
                    <div className="row" >
                    
                        {/* <SingleCountdown extraClass="mb-4 mb-md-0" title="Years of Experience" start={0} end={2} duration={5}/> 
                          <SingleCountdown extraClass="mb-4 mb-md-0" title="Satisfied Customers" start={0} end={200} duration={100}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Design Items" start={0} end={769} duration={100}/> 
                         <SingleCountdown title="Clients Served" start={0} end={124} duration={100}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
// import { FiPlus } from "react-icons/fi";

export default function SinglePortfolio(props) {
    const { portfolioImg, title, description, portfolioLink, linkDescription } = props;
    return (
        <div className="grid">
            <div className="col px-sm-2 mb-3">
                <div className="portfolio-wrapper">
                    <div className="portfolio-thumb blog-img" style={{ marginTop: '35px'  }}>
                        <a href={portfolioImg}><img className="blog-img" src={portfolioImg} alt={title} /></a> 
                    </div>
                    {/* <div className="overlay">
                        <a href={portfolioImg} data-attribute="SRL">
                            <img className="d-none" src={portfolioImg} alt={title}/>
                            <i><FiPlus /></i>
                        </a>
                    </div> */}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <a style={{ margin: '10px 0' }} href={portfolioLink}>{linkDescription}</a>
                    <p>{description}</p>                    
                </div>
            </div>
        </div>
    )
}

import React from "react";

export default function Sectone() {
    return <div className="secone" style={{height: "100vh"}}>
        <div className="imglogo">
            <img style={{marginLeft: "100px", height: "128px", width: "128px"}} src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </div>
        <div className="text">
            <div className="rectangle"></div>
            <h1 className="name">Chandan Dhamande</h1>
            <h4 className="tagline">Designed to Laconic and Ostantatious</h4>
            <nav className="navbar">
                <ul>
                    <li>About Me</li>
                    <li>Education</li>
                    <li>Pragmatic Experience</li>
                    <li>Projects</li>
                    <li>Technical Me</li>
                </ul>
            </nav>
            <hr style={ {background: "#C4C4C4", width: "30%"}}/>
        </div>
    </div>
}
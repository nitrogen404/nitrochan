import React from "react";

const style = {height: "80px", width: "80px"}

export default function Technicalme() {
    return <div className="techicons" style={{marginTop: "170px"}}>
        <h1>Technical Me</h1>
        <ul className="icons">
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/python.png"} alt="python" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/javascript.png"} alt="javascript" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/expressjs-icon.png"} alt="expressjs" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/react.png"} alt="react" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/nodejs.png"} alt="nodejs" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/html.png"} alt="html" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/css-3.png"} alt="css3" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/figma.png"} alt="figma" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/photoshop.png"} alt="photoshop" /></li>
            <li><img style={style} src={process.env.PUBLIC_URL + "/images/indesign.png"} alt="indesign" /></li>
        </ul>
    </div>
}
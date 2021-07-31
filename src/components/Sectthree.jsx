import React from "react";

export default function Sectthree() {
    return <div className="sectthree" style={{marginTop: "170px"}}>
        <h1>Education</h1>
        <h4>DY Patil International University, Pune</h4>
        <br />
        <h6>BTech, Computer Science and Engineering, 2023</h6>
        <img src={process.env.PUBLIC_URL + "/images/dypiu_logo.jpg"} alt="DYPIU" style={{height: "200px", width: "200px", float: "right", marginTop: "-120px", marginRight: "170px"}} />
    </div>
}

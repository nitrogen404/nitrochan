import React from "react";
import Card from "./Pragmaticcard";
import data from "../experience";


export default function Sectfour() {
    return <div className="experience" style={{marginTop: "170px"}}>
        <h1>Pragmatic Experience</h1>
        <ul className="cards">
            {data.map(({ heading, title, text }) => (
                <Card heading={heading} title={title} text={text} />
            ))}
        </ul>
        
    </div>
}
import React from "react";

export default function Projectcard(props) {
    return <div className="pcard">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <h6>{ props.tech}</h6>
    </div>
}
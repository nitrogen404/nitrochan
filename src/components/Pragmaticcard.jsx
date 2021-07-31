import React from "react";

export default function Card(props) {
    return <div className="card">
        <h3>{props.heading}</h3>
        <h6>{ props.title}</h6>
        <p>{ props.text}</p>
    </div>
}


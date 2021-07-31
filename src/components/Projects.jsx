import React from "react";
import Projectcard from "./Projectcard";
import projects from "../projects"


export default function Projects() {
    return <div className="projects" style={{marginTop: "170px"}}>
        <h1>Projects</h1>
        <ul className="cards">
            {projects.map(({ title, body, tech }) => (
                <Projectcard title={title} text={body} tech={tech} />
            ))}
        </ul>
        <img style={{ height: "80px", width: "80px", marginTop: "100px", marginLeft: "720px" }} src={process.env.PUBLIC_URL + "/images/github.png"} alt="githubacc" />
        <a href="https://github.com/nitrogen404" style={{textDecoration: "none"}}><p style={{fontFamily: "Open Sans, sans-serif", fontSize: "13px", textAlign: "center"}}>Click here to follow the Github Account.</p></a>
    </div>
}
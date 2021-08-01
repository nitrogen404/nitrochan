import React from "react";
import Projectcard from "./Projectcard";
import projects from "../projects"


export default function Projects() {
    return <div className="projects">
        <h1>Projects</h1>
        <ul className="cards">
            {projects.map(({ title, body, tech }) => (
                <Projectcard title={title} text={body} tech={tech} />
            ))}
        </ul>
        <img className="gitacc" src={process.env.PUBLIC_URL + "/images/github.png"} alt="githubacc" />
        <a href="https://github.com/nitrogen404" style={{textDecoration: "none"}}><p className="link">Click here to follow the Github Account.</p></a>
    </div>
}
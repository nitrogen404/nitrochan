import React from "react";
import Sectone from "./Sectone";
import Secttwo from "./Secttwo";
import Sectthree from "./Sectthree";
import Sectfour from "./Sectfour";
import Projects from "./Projects";
import Technicalme from "./Technicalme";
import Contact from "./Contact";

export default function App() {
    return <div className="container">
        <Sectone/>
        <Secttwo />
        <Sectthree />
        <Sectfour />
        <Projects />
        <Technicalme />
        <Contact />
    </div>
}
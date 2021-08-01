import React from "react";

export default function Secttwo() {
    return <div className="secttwo">
        <h1>About Me</h1>
        <p>Heyy! I'm Chandan. <br /> Fanatical Programmer, Dilettante Cook. I'm keen about the web technologies and Javascript. Sometimes people ask me why do I code? Is it that I'm a nerd?<br />Quite not!  When I turn on the screen, all I see is a world waiting for me that I can call my own. As a programmer, all I need is laptop to make my fortune. I can make products that could touch life of millions... all from my tiny room. <br /> Apart from programming I love playing and watching football and EDM music. <br />  PS:  I wear glasses :P</p>
        <img className="picture" src={process.env.PUBLIC_URL + "/images/gradient_circle.png"} alt="I'ts MEEEE!!!!" />
    </div>
}


import React from "react";

export default function Contact() {
    return <div className="contact" style={{ marginTop: "170px" }}>
        <h1>Contact Me on</h1>
        <ul className="socialmedia">
            <li><a href="https://www.linkedin.com/in/chandandhamande/"><img style={{height: "60px", width: "60px"}} src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/nitrogeno.o/"><img style={{height: "60px", width: "60px"}} src={process.env.PUBLIC_URL + "/images/instagram.png"} alt="instagram" /></a></li>
        </ul>
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "13px", textAlign: "center", marginTop: "90px", paddingBottom: "30px", color: "#fff"}}>Designed and Engineered by <br />Chandan a.k.a Nitrogen</p>
    </div>
}
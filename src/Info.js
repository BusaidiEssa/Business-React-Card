import React from "react";
import { ReactDOM } from "react";
import pfp from "./profile-pic.jpg"
import emaill from "./images/mail.png"
import linkedinl from "./images/linkedin.png"

export default function Info(){
    return(
    <div className="info">
        <div className="content-container">
        <img src={pfp} className="pfp" Alt="Profile picture"></img>
        <h1 className="Name">Essa Al Busaidi</h1>
        <h3 className="position">Frontend devoloper</h3>
        <h4 className="website">busaidiessa.website</h4>

        <div className="btn--class">
        <button className="info--buttons btn--email">
            <img src={emaill}></img>Email</button>
        <button className="info--buttons btn--linkedin">
            <img src={linkedinl}></img>LinkedIn</button>
        </div>
        </div>
    </div>
    )
}
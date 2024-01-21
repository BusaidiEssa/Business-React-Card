import React from "react";
import { ReactDOM } from "react";
import pfp from "./profile-pic.jpg"

export default function Info(){
    return(
    <div className="info">

        <img src={pfp} className="pfp" Alt="Profile picture"></img>
        <h1>Essa Al Busaidi</h1>
        <h2>Frontend devoloper</h2>
        <h4>busaidiessa.website</h4>
        <btn>Email</btn>
        <btn>LinkedIn</btn>
    </div>
    )
}
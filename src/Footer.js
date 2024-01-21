import React from "react";
import { ReactDOM } from "react";
import facebookl from "./images/facebook.png"
import githubl from "./images/github.png"
import twitterl from "./images/twitter.png"
import instagraml from "./images/instagram.png"
export default function Footer(){
    return(
    <div className="footer">
        <img src={twitterl}></img>
        <img src={facebookl}></img>
        <img src={instagraml}></img>
        <img src={githubl}></img>
    </div>
    )
}
import React from "react";
import { ReactDOM } from "react";
import facebookl from "./images/facebook.svg"
import githubl from "./images/github.svg"
import twitterl from "./images/twitter.svg"
import instagraml from "./images/instagram.svg"
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
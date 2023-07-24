import React from "react"
import group from '../Group.png';

export default function Hero (){
    return(
        <div className="middle-section">
            <img src={group} className="groupimg"></img>
            <h1 className="hero-heading">Online Experiences</h1>
            <p className="hero-para">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

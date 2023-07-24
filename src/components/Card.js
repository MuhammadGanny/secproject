import React from "react"
import star from "../Star.png"
import image from "../image.png"
export default function Card (){
    return(
        <div className="card">
            <img src={image} className="card-img"></img>
            <div className="card-stats">
                <img src={star} className="card-star"></img>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}
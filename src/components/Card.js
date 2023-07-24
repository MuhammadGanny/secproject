import React from "react"
import star from "../images/Star.png"
 import image from "../images/image.png"
export default function Card ( props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card-img"></img>
            <div className="card-stats">
                <img src={star} className="card-star"></img>
                <span>{props.rating}</span>
                <span>{props.reviewCount} • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    )
}
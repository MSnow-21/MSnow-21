import React from "react";
import "./style.css";

function WolfCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <h3 className="headingfact">Wolf Fact: {props.number}</h3>
                <p>{props.fact}</p>
                <p>{props.source}</p>
            </div>
        </div>
    )

}

export default WolfCard;
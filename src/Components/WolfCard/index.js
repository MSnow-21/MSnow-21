import React from "react";
import "./style.css";

function WolfCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <h3 className="headingfact">Interesting Facts</h3>
                <p>{props.fact}</p>
            </div>

        </div>
    )

}

export default WolfCard;
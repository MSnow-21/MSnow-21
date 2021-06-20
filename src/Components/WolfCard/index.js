import React from "react";
import "./style.css";

function WolfCard(props){
    return(
        <div className="card">
             <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>Animal Type: </strong> {props.animaltype}
                    </li>
                </ul>
            </div>
    
        </div>
    )
    
}

export default WolfCard;
import React, { useState } from "react";

const Card = (props) => {
    return (
        <div className="card card-sw bg-dark">
            <img src={props.src ? props.src : "https://lumiere-a.akamaihd.net/v1/images/4-3-rosw_c4c4312b.jpeg"} 
            className="card-img-top" alt={props.title ? `Imagen de ${props.title}` : "Imagen de StarWars"} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.fact1 ? <p className="card-text">{props.fact1}</p> : null}
                {props.fact2 ? <p className="card-text">{props.fact2}</p> : null}
                {props.fact3 ? <p className="card-text">{props.fact3}</p> : null}
                <a href="#" className="btn btn-primary">Learn More!</a>
            </div>
        </div>
    );
}

export default Card;
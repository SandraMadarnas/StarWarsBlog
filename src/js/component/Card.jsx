import React, { useState } from "react";


const Card = ({ people }) => {
    return (<>
        <div className="card-sw">
            {people.map((person) => (
                <div key={person.uid} className="col-4">
                    <img src={person.src ? person.uid : "https://lumiere-a.akamaihd.net/v1/images/4-3-rosw_c4c4312b.jpeg"}
                        className="card-img-top" alt={person.title ? `Imagen de ${person.title}` : "Imagen de StarWars"} />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        {person.gender ? <p className="card-text">Gender: {person.gender}</p> : null}
                        {person.birth_year ? <p className="card-text">Birth year: {person.birth_year}</p> : null}
                        <a href="#" className="btn btn-primary">Learn More!</a>
                    </div>
                </div>
            ))
            }
        </div>
    </>
    );
};


export default Card;
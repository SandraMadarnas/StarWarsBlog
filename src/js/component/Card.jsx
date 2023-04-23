import React from "react";

import Actions from "./Actions.jsx";

const Card = ({ people, peopleProperties }) => {
  return (
    <>
      <div className="card-sw">
        {people.map((person, index) => {
          return (
            <div key={person.uid} className="col m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                className="card-img-top"
                alt="Imagen de StarWars"
              />
              <div className="card-body">
                <b><h4 className="card-title">{person.name}</h4></b>
                {peopleProperties[index] && (
                  <p className="card-text">
                    <b>Gender:</b> {peopleProperties[index].gender}
                  </p>
                )}
                {peopleProperties[index] && (
                  <p className="card-text">
                    <b>Hair Color:</b> {peopleProperties[index].hair_color}
                  </p>
                )}
                {peopleProperties[index] && (
                  <p className="card-text">
                    <b>Eye Color:</b> {peopleProperties[index].eye_color}
                  </p>
                )}
                <Actions type={"people"} uid={person.uid} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Card;
import React from "react";

import Button from "../component/Button.jsx";

const Card = ({ people, peopleProperties }) => {
  return (
    <>
      <div className="card-sw">
        {people.map((person, index) => {
          return
          <div key={person.uid} className="col m-2">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              className="card-img-top"
              alt="Imagen de StarWars"
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              {peopleProperties[index] && (
                <p className="card-text">
                  Gender: {peopleProperties[index].gender}
                </p>
              )}
              {peopleProperties[index] && (
                <p className="card-text">
                  Hair Color: {peopleProperties[index].hair_color}
                </p>
              )}
              {peopleProperties[index] && (
                <p className="card-text">
                  Eye Color: {peopleProperties[index].eye_color}
                </p>
              )}
              <Button uid={person.uid} />
            </div>
          </div>
        })}
      </div>
    </>
  );
};


export default Card;
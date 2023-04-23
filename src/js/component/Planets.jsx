import React from "react";

import Actions from "./Actions.jsx";

const Planets = ({ planets, planetsProperties }) => {
  return (
    <>
      <div className="card-sw">
        {planets.map((planet, index) => (
          <div key={planet.uid} className="col m-2">
            <img src={planet.uid == 1 ? `https://custom.swcombine.com/static/8/632-large-1675095606.png` 
            :`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              className="card-img-top"
              alt="Imagen de StarWars-Planets"
            />
            <div className="card-body">
            <b><h5 className="card-title">{planet.name}</h5></b>
              {planetsProperties[index] && (
                <p className="card-text">
                  <b>Climate:</b> {planetsProperties[index].climate}
                </p>
              )}
              {planetsProperties[index] && (
                <p className="card-text">
                  <b>Population:</b> {planetsProperties[index].population}
                </p>
              )}
              {planetsProperties[index] && (
                <p className="card-text">
                  <b>Diameter:</b> {planetsProperties[index].diameter}
                </p>
              )}
              <Actions type={"planet"} uid={planet.uid} />
            </div>
          </div>
        ))}

      </div>
    </>
  );
};


export default Planets;
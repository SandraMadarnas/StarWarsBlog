import React from "react";

import Button from "../component/Button.jsx";

const Planets = ({ planets, planetsProperties }) => {
  return (
    <>
      <div className="card-sw">
        {planets.map((planet, index) => (
          <div key={planet.uid} className="col m-2">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              className="card-img-top"
              alt="Imagen de StarWars-Vehicles"
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
              <Button uid={planet.uid} />
            </div>
          </div>
        ))}

      </div>
    </>
  );
};


export default Planets;
import React from "react";

import Button from "../component/Button.jsx";

const Vehicles = ({ vehicles, vehiclesProperties }) => {
  return (
    <>
      <div className="card-sw">
        {vehicles.map((vehicle, index) => (
          <div key={vehicle.uid} className="col m-2">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
              className="card-img-top"
              alt="Imagen de StarWars-Vehicles"
            />
            <div className="card-body">
              <h4 className="card-title">{vehicle.name}</h4>
              {vehiclesProperties[index] && (
                <p className="card-text">
                  Model: {vehiclesProperties[index].model}
                </p>
              )}
              {vehiclesProperties[index] && (
                <p className="card-text">
                  Manufacturer: {vehiclesProperties[index].manufacturer}
                </p>
              )}
              {vehiclesProperties[index] && (
                <p className="card-text">
                  Passengers: {vehiclesProperties[index].passengers}
                </p>
              )}
              <Button uid={vehicle.uid} />
            </div>
          </div>
        ))}

      </div>
    </>
  );
};


export default Vehicles;
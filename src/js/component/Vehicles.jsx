import React from "react";

const Vehicles = ({ vehicles, vehiclesProperties }) => {
console.log(vehicles);

  return (
    <>
      <div className="card-sw">
        {vehicles.map((vehicle, index) => (
          <div key={vehicle.uid} className="col m-2">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${vehicle.uid}.jpg`}
              className="card-img-top"
              alt="Imagen de StarWars-Vehicles"
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
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
            </div>
          </div>
        ))}

      </div>
    </>
  );
};


export default Vehicles;
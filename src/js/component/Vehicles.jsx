import React, { useState, useEffect } from "react";

const Vehicles = () => {
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/4")
      .then((res) => res.json())
      .then((data) => {
        setVehicle(data.result.properties);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-dark p-4">
      <h3>Vehicle Details</h3>
      {vehicle && (
        <ul>
          <li>Name: {vehicle.name}</li>
          <li>Model: {vehicle.model}</li>
          <li>Manufacturer: {vehicle.manufacturer}</li>
          <li>Class: {vehicle.vehicle_class}</li>
        </ul>
      )}
    </div>
  );
};

export default Vehicles;

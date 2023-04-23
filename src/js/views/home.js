import React, { useState, useEffect } from "react";
import { useStore } from "../store/context";

import "../../styles/home.css";

import Loading from "../component/Loading.jsx";
import Card from "../component/Card.jsx";
import CardDetails from "./CardDetails.jsx";
// import Button from "../component/Button.jsx";
// import Films from "../component/Films.jsx";
import Vehicles from "../component/Vehicles.jsx";
import Planets from "../component/Planets.jsx";
import Actions from "../component/Actions.jsx";

export const Home = () => {
  const {
    people,
    peopleProperties,
    vehicles,
    vehiclesProperties,
    planets,
    planetsProperties,
  } = useStore();

  return (
    <>
      {/* <Loading /> */}
      <div className="card-container p-4" id="characters">
        <h2>Characters</h2>
        <Card people={people} peopleProperties={peopleProperties} />
      </div>
      <div className="card-container p-4" id="vehicles">
        <h2 className="p-4">Vehicles</h2>
        <Vehicles vehicles={vehicles} vehiclesProperties={vehiclesProperties} />
      </div>

      <div className="card-container p-4" id="planets">
        <h2 className="p-4">Planets</h2>
        <Planets planets={planets} planetsProperties={planetsProperties} />
      </div>
    </>
  );
};

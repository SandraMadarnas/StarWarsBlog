import React, { useState, useEffect } from "react";
import { useStore } from "../store/context";

import "../../styles/home.css";
import Card from "../component/Card.jsx";
import CardDetails from "../component/CardDetails.jsx";
import Button from "../component/Button.jsx";
import Films from "../component/Films.jsx";
import Vehicles from "../component/Vehicles.jsx";

export const Home = () => {
  const { people, peopleProperties, propertiesList } = useStore();

  const [films, setFilms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getFilms = () => {
    fetch("https://www.swapi.tech/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <div className="card-container p-4">
        <h2>Characters</h2>
        <Card people={people} peopleProperties={propertiesList} />
      </div>

      <h2 className="p-4">Characters Details</h2>

      {/* <CardDetails peopleProperties={propertiesList} /> */}

      {propertiesList
        ? propertiesList.map((properties, index) => {
            return <CardDetails key={index} properties={properties} />;
          })
        : null}

      {/* {loaded && <Film film={film} />} */}
      <h2 className="p-4">Films</h2>
      <Films />
      <h2 className="p-4">Vehicles</h2>
      <Vehicles />
    </>
  );
};

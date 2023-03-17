import React, { useState, useEffect } from "react";

import "../../styles/home.css";
import Card from "../component/Card.jsx";
import CardDetails from "../component/CardDetails.jsx";
import Button from "../component/Button.jsx";
import Films from "../component/Films.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [peopleProperties, setPeopleProperties] = useState([]);
  const [propertiesList, setPropertiesList] = useState([]);
  const [films, setFilms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPeopleProperties = () => {
    const propertiesList = people.map((peopleProperties) => {
      return fetch(`https://www.swapi.tech/api/people/${peopleProperties.uid}`)
        .then((res) => res.json())
        .then((data) => {
          return data.result.properties;
        })
        .catch((err) => console.error(err));
    });

    Promise.all(propertiesList).then((values) => {
      setPropertiesList(values);
    });
  };

  const getFilms = () => {
    fetch("https://www.swapi.tech/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    getPeopleProperties();
  }, [people]);

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <div className="card-container p-2">
        <h2>Characters</h2>
        <Card people={people} peopleProperties={propertiesList} />
      </div>
      <h2>Characters Details</h2>
      <CardDetails peopleProperties={propertiesList} />
      {/* {loaded && <Film film={film} />} */}
      <h2>Films</h2>
      <Films />
    </>
  );
};

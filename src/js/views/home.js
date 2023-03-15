import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import CardDetails from "../component/CardDetails.jsx";
import CarrouselCard from "../component/CarrouselCard.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [peopleProperties, setPeopleProperties] = useState([]);
  const [propertiesList, setPropertiesList] = useState([]);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPeopleProperties = () => {
    const propertiesList = people.map((peopleProperty) => {
      return fetch(`https://www.swapi.tech/api/people/${peopleProperty.uid}`)
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

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    getPeopleProperties();
  }, [people]);

  return (
    <>
      <h2>Characters</h2>
      <Card people={people} />
      <h2>Details</h2>
      <CardDetails peopleProperties={propertiesList} />
      <h2>Carrusel</h2>
      <CarrouselCard />
    </>
  );
};

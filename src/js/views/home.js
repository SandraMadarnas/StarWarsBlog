import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [peopleProperties, setPeopleProperties] = useState([]);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        // console.log(data.results);
      })
      .catch((err) => console.error(err));
  };

  //   const getPeopleProperties = () => {
  //     const characterProperties = people.map((character) => {
  //       fetch(`https://www.swapi.tech/api/people/${character.uid}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setPeopleProperties([...peopleProperties, data.result.properties]);
  //         })
  //         .catch((err) => console.error(err));
  //     });
  //     return characterProperties;
  //   };

  useEffect(() => {
    getPeople();
  }, []);

  //   setTimeout(() => {
  //     getPeopleProperties();
  //     console.log(peopleProperties);
  //   }, 5000);

  console.log(people);

  return (
    <div className="container text-center mt-5">
      <h2>Characters</h2>
      <Card />
    </div>
  );
};

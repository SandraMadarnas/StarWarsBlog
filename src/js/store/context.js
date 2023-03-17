import React, { createContext, useContext, useState, useEffect } from "react";

const contexto = createContext();

const ContextProvider = ({ children }) => {
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
    const propertiesList = people.map((peopleProperties) => {
      return fetch(`https://www.swapi.tech/api/people/${peopleProperties.uid}`)
        .then((res) => res.json())
        .then((data) => {
          return { ...data.result.properties, uid: peopleProperties.uid };
        })
        .catch((err) => console.error(err));
    });

    Promise.all(propertiesList).then((values) => {
      console.log(values);
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
    <contexto.Provider value={{ people, peopleProperties, propertiesList }}>
      {children}
    </contexto.Provider>
  );
};

export const useStore = () => {
  return useContext(contexto);
};

export default ContextProvider;

import React, { createContext, useContext, useState, useEffect } from "react";

const contexto = createContext();

const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [peopleProperties, setPeopleProperties] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesProperties, setVehiclesProperties] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [planetsProperties, setPlanetsProperties] = useState([]);

  const getPeople = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPeopleProperties = () => {
    const promises = people.map((peopleProperties) => {
      return fetch(`https://www.swapi.tech/api/people/${peopleProperties.uid}`)
        .then((res) => res.json())
        .then((data) => {
          return { ...data.result.properties, uid: peopleProperties.uid };
        })
        .catch((err) => console.error(err));
    });

    Promise.all(promises).then((values) => {
      setPeopleProperties(values);
    });
  };

  const getVehicles = () => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getVehiclesProperties = () => {
    const promises = vehicles.map((vehiclesProperties) => {
      return fetch(
        `https://www.swapi.tech/api/vehicles/${vehiclesProperties.uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          return { ...data.result.properties, uid: vehiclesProperties.uid };
        })
        .catch((err) => console.error(err));
    });

    Promise.all(promises).then((values) => {
      setVehiclesProperties(values);
    });
  };

  const getPlanets = () => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPlanetsProperties = () => {
    const promises = planets.map((planetsProperties) => {
      return fetch(
        `https://www.swapi.tech/api/planets/${planetsProperties.uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          return { ...data.result.properties, uid: planetsProperties.uid };
        })
        .catch((err) => console.error(err));
    });

    Promise.all(promises).then((values) => {
      setPlanetsProperties(values);
    });
  };

  useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);

  useEffect(() => {
    getPeopleProperties();
  }, [people]);

  useEffect(() => {
    getPlanetsProperties();
  }, [planets]);

  useEffect(() => {
    getVehiclesProperties();
  }, [vehicles]);

  const store = {}

  const actions = {}

  return (
    <contexto.Provider
      value={{
        // { store, action }
        people,
        peopleProperties,
        vehicles,
        vehiclesProperties,
        planets,
        planetsProperties,
      }}
    >
      {children}
    </contexto.Provider>
  );
};

export const useStore = () => {
  return useContext(contexto);
};

export default ContextProvider;

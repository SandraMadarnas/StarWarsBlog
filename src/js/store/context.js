import React, { createContext, useContext, useState, useEffect } from "react";

const contexto = createContext();

const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [peopleProperties, setPeopleProperties] = useState([]);
  const [propertiesList, setPropertiesList] = useState([]);
  // const [vehicles, setVehicles] = useState([]);
  // const [vehiclesProperties, setVehiclesProperties] = useState([]);
  // const [vehiclesList, setVehiclesList] = useState([]);

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


  // const getVehicles = () => {
  //   fetch("https://www.swapi.tech/api/vehicles")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVehicles(data.results);
  //       console.log("Vehicles:", values);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const getVehiclesProperties = () => {
  //   const vehiclesList = vehicles.map((vehiclesProperties) => {
  //     return fetch(
  //       `https://www.swapi.tech/api/people/${vehiclesProperties.uid}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         return { ...data.result.properties, uid: vehiclesProperties.uid };
  //       })
  //       .catch((err) => console.error(err));
  //   });

  //   Promise.all(vehiclesList).then((values) => {
  //     // console.log(values);
  //     setVehiclesList(values);
  //   });
  // };
  

  useEffect(() => {
    getPeople();
    // getPlanets();
    // getVehicles();
  }, []);

  useEffect(() => {
    getPeopleProperties();
  }, [people]);

  // useEffect(() => {
  //   getPlanetsProperties();
  // }, [planets]);

  // useEffect(() => {
  //   getVehiclesProperties();
  // }, [vehicles]);

  return (
    // <contexto.Provider value={{ peopleProperties, planetsProperties, vehiclesProperties }}>
      <contexto.Provider value={{ peopleProperties }}>
      {children}
    </contexto.Provider>
  );
};

export const useStore = () => {
  return useContext(contexto);
};

export default ContextProvider;

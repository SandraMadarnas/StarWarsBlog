import React, { useState, useEffect } from "react";

const Films = ({ films }) => {
  const [film, setFilm] = useState([]);

  const getFilm = () => {
    fetch("https://www.swapi.tech/api/films/1")
      .then((res) => res.json())
      .then((data) => {
        setFilm(data.result.properties);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div className="bg-dark p-4">
      {/* {films.map((film, index) => (
      <div key={film.uid} className="col m-2"></div>
    ))} */}

      {film && (
        <div className="card bg-dark">
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.opening_crawl}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Films;
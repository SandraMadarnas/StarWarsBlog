import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ps-4 pe-4">
        <Link to="/">
          <img
            className="logo"
            src="https://bilder.fernsehserien.de/gfx/bv/star-wars-w-970.jpg.jpg"
          />
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-warning">
              Favorites <i className="fa fa-heart text-danger" />{" "}
            </button>
          </Link>
        </div>
      </nav>
      {/* <nav className="navbar navbar-dark bg-dark mb-3 p-4">
        <Link to="/characters">
          <h3>Characters</h3>
        </Link>
        <Link to="/films">
          <h3>Films</h3>
        </Link>
        <Link to="/vehicles">
          <h3>Vehicles</h3>
        </Link>
        <Link to="/planets">
          <h3>Planets</h3>
        </Link>
      </nav> */}
    </>
  );
};

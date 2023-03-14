import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 ps-2 pe-2">
      <Link to="/">
        <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/starwars-225970.png" /> 
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-warning">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};

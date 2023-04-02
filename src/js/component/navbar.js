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
          <Link to="/">
            <button className="btn btn-warning m-2">
              Home <i className="fas fa-home"></i>
            </button>
          </Link>
          <Link to="/vehicles">
            <button className="btn btn-warning m-2">
              Vehicles <i className="fas fa-space-shuttle"></i>
            </button>
          </Link>
          <Link to="/planets">
            <button className="btn btn-warning m-2">
              Planets <i className="fas fa-globe"></i>
            </button>
          </Link>
          <Link to="/films">
            <button className="btn btn-warning m-2">
              Films <i className="fas fa-video"></i>
            </button>
          </Link>
          <Link to="/demo">
            <button className="btn btn-warning m-2">
              Favorites <i className="fa fa-heart text-danger" />{" "}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

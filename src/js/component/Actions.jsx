import React from "react";
import { Link } from "react-router-dom";

const Actions = ({ uid }) => {
    return (
        <div className="d-flex">
            <Link to={`/people/${uid}`} className="btn-wide btn-normal">
                Details
            </Link>

            <div>
                <button className="button fav" onClick={() => handleClick(uid)}>
                    <i className="fa fa-star"></i>
                </button>
            </div>
        </div>
    );
};

export default Actions;

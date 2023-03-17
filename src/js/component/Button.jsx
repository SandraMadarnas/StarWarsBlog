import React from "react";
import { Link } from "react-router-dom";

const Button = ({ uid }) => {
    const handleClick = () => {
        console.log("Clicked button with uid:", uid);
    };

    return (
        <Link to={`/people/${uid}`}>
            <button className="btn-wide btn-normal" onClick={() => handleClick(uid)}>
                Details
            </button>
        </Link>
    );
};

export default Button;

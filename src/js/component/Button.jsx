import React from "react";
import { Link } from "react-router-dom";

import CardDetails from "./CardDetails.jsx";

const Button = ({ uid }) => {
    // const [selectedUid, setSelectedUid] = useState(null);

    // const handleClick = () => {
    //     setSelectedUid(uid);
    // };

    const handleClick = () => {
            <CardDetails uid={uid} />
        };

    return (
        <Link to={`/people/${uid}`}>
            <button className="btn-wide btn-normal" onClick={() => handleClick(uid)}>
                Details
            </button>
            <a href="#" className="icon-button">
                <i className="fas fa-heart"></i>
            </a>
        </Link>
    );
};

export default Button;

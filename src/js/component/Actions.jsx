import React from "react";
import { Link } from "react-router-dom";

import CardDetails from "../views/CardDetails.jsx";

const Actions = ({ uid }) => {
    // const [selectedUid, setSelectedUid] = useState(null);

    // const handleClick = () => {
    //     setSelectedUid(uid);
    // };

    return (
        <div className="d-flex">
            <Link to={`/people/${uid}`} className="btn-wide btn-normal">
                Details
            </Link>
            <button className="btn-normal" onClick={() => handleClick(uid)}>
                <i className="fas fa-heart"></i>
            </button>
        </div>
    );
};

export default Actions;

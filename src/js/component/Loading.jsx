import React from "react";

const Loading = () => {
    return (
        <div>
            <img
                className="imagenEspera d-block mb-2"
                src="https://img.gta5-mods.com/q75/images/starwars-loading-music/7c4b17-1200px-Star_Wars_Logo.svg.png"
            />
            <button
                className="btn btn-warning fw-bolder"
                type="button"
                disabled
            >
                <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
                <span
                    className="spinner-border spinner-border-sm ms-2"
                    role="status"
                    aria-hidden="true"
                ></span>
            </button>
        </div>
    );
};

export default Loading;

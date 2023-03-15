import React from "react";

const CardDetails = ({ peopleProperties }) => {
    return (
        <div className="card bg-dark mb-3">
            {peopleProperties.map((properties, index) => (
                <div key={index} className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2020/05/07/19/37/r2d2-5142912_960_720.jpg" className="img-fluid rounded-start" alt="#" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{properties.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="container text-center div-red">
                                <div className="row p-2">
                                    <div className="col col-red">
                                        <p>Name: </p><p>{properties.name}</p>
                                    </div>
                                    <div className="col">
                                        <p>Birth Year: </p><p>{properties.birth_year}</p>
                                    </div>
                                    <div className="col">
                                        <p>Gender: </p><p>{properties.gender}</p>
                                    </div>
                                    <div className="col">
                                        <p>Height: </p><p>{properties.height}</p>
                                    </div>
                                    <div className="col">
                                        <p>Skin Color: </p><p>{properties.skin_color}</p>
                                    </div>
                                    <div className="col">
                                        <p>Eye Color: </p><p>{properties.eye_color}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )
            }
        </div>
    );
}


export default CardDetails;
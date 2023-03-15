import React from "react";

const CardDetails = ({ peopleProperties }) => {
    return (
        <div className="card card-details bg-dark mb-3">
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
                            <div class="container text-center div-red">
                                <div class="row p-2">
                                    <div class="col">
                                        Name :{properties.name}
                                    </div>
                                    <div class="col">
                                        Birth Year
                                    </div>
                                    <div class="col">
                                        Gender
                                    </div>
                                    <div class="col">
                                        Height: {properties.height}
                                    </div>
                                    <div class="col">
                                        Skin Color
                                    </div>
                                    <div class="col">
                                        Eye Color: {properties.eye_color}
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
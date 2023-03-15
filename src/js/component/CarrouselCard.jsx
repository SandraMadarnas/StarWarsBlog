import React from "react";

const CarrouselCard = () => {

    <div className="container my-4 w-50">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" className="card-img-top w-100 bg-dark" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 1</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 2</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 3</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    </div>
}

export default CarrouselCard;
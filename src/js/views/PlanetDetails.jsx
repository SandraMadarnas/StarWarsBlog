import React from "react";
import { useStore } from "../store/context";
import { useParams } from "react-router";

const PlanetDetails = () => {
    const {
        planetsProperties
    } = useStore();

    const params = useParams();

    const properties = planetsProperties.find((planet) => {
        return planet.uid == params.idPlanet
    });

    return (
        <div className="card bg-dark p-4 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={properties.uid == 1 ? `https://custom.swcombine.com/static/8/632-large-1675095606.png`
                        : `https://starwars-visualguide.com/assets/img/planets/${properties.uid}.jpg`}
                        className="img-fluid rounded-start" alt="#" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title py-2">{properties.name}</h1>
                        <h3 className="py-2">A planet of StarWars</h3>
                        <div className="container text-center div-red">
                            <div className="row p-2">
                                <div className="col custom-col">
                                    <p><b>Name:</b> </p><p>{properties.name}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Climate:</b> </p><p>{properties.climate}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Diameter:</b> </p><p>{properties.diameter}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Population:</b> </p><p>{properties.population}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Terrain:</b> </p><p>{properties.terrain}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Gravity:</b> </p><p>{properties.gravity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default PlanetDetails;
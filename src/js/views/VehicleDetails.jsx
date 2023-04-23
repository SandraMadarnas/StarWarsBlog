import React from "react";
import { useStore } from "../store/context";
import { useParams } from "react-router";

const VehicleDetails = () => {
    console.log(params);

    const {
        vehiclesProperties
    } = useStore();

    const params = useParams();

    const properties = vehiclesProperties.find((vehicle) => {
        return vehicle.uid == params.idVehicle
    });

    return (
        <div className="card bg-dark p-4 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${properties.uid}.jpg`}
                        className="img-fluid rounded-start" alt="#" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title py-2">{properties.name}</h1>
                        <h3 className="py-2">A vehicle of StarWars</h3>
                        <div className="container text-center div-red">
                            <div className="row p-2">
                                <div className="col custom-col">
                                    <p><b>Name:</b> </p><p>{properties.name}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Passengers:</b> </p><p>{properties.passengers}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Cargo Capacity:</b> </p><p>{properties.cargo_capacity}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Consumables:</b> </p><p>{properties.consumables}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Manufacturer:</b> </p><p>{properties.manufacturer}</p>
                                </div>
                                <div className="col custom-col">
                                    <p><b>Length:</b> </p><p>{properties.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default VehicleDetails;
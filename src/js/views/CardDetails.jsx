import React from "react";
import { useStore } from "../store/context";
import { useParams } from "react-router";

const CardDetails = () => {
    const {
        peopleProperties
      } = useStore();

      const params = useParams();
      console.log(params);
      console.log("PeopleProperties: ", peopleProperties);

      const properties = peopleProperties.find((character) => {
        return character.uid == params.idPeople
      });

    return (
        <div className="card bg-dark p-4 mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${properties.uid}.jpg`}
                        className="img-fluid rounded-start" alt="#" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <b><h5 className="card-title">{properties.name}</h5></b>
                        <p className="card-text">Descripción</p>
                        <div className="container text-center div-red">
                            <div className="row p-2">
                                <div className="col col-red">
                                    <p><b>Name:</b> </p><p>{properties.name}</p>
                                </div>
                                <div className="col">
                                    <p><b>Birth Year:</b> </p><p>{properties.birth_year}</p>
                                </div>
                                <div className="col">
                                    <p><b>Gender:</b> </p><p>{properties.gender}</p>
                                </div>
                                <div className="col">
                                    <p><b>Height:</b> </p><p>{properties.height}</p>
                                </div>
                                <div className="col">
                                    <p><b>Skin Color:</b> </p><p>{properties.skin_color}</p>
                                </div>
                                <div className="col">
                                    <p><b>Eye Color:</b> </p><p>{properties.eye_color}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default CardDetails;
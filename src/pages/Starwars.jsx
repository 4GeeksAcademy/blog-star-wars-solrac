import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPersonajeDetalle, getPersonajes, getPlanets, getVehiculos } from "../service/serviceAPI";

export const Starwars = () => {

    const navigate = useNavigate()

    const [personajes, setPersonajes] = useState([]);
    const [vehiculos, setVehiculos] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addFavorites = (id) => {
        setFavorites((prev) => {
            const isAlreadyFavorite = prev.some((fav) => fav.id === item.id);
            if (isAlreadyFavorite) {
                // Si ya está en favoritos, lo quitamos
                return prev.filter((fav) => fav.id !== item.id);
            } else {
                // Si no está, lo agregamos
                return [...prev, item];
            }
        });

    }

    useEffect(() => {
        const fetchData = async () => {
            //Personajes
            const lista = await getPersonajes();
            const detalles = await Promise.all(
                lista.map(async (p) => { //aqui hacemos un map de listas que es de donde queremos sacar el personaje individual
                    const res = await fetch(p.url); // usamos el campo "url" que viene de la API
                    const data = await res.json();
                    return {
                        id: p.uid,
                        name: data.result.properties.name,
                        gender: data.result.properties.gender,
                        hair_color: data.result.properties.hair_color,
                        eye_color: data.result.properties.eye_color,
                    };
                })
            );
            setPersonajes(detalles);

            // Vehículos
            const vehiculosApi = await getVehiculos();
            const vehiculosDetalles = await Promise.all(
                vehiculosApi.map(async (v) => {
                    const res = await fetch(v.url);
                    const data = await res.json();
                    return {
                        id: v.uid,
                        name: data.result.properties.name,
                        model: data.result.properties.model,
                        vehicle_class: data.result.properties.vehicle_class,
                        crew: data.result.properties.crew,
                    };
                })
            );
            setVehiculos(vehiculosDetalles);

            //Planetas
            const planetasApi = await getPlanets();
            const planetasDetalles = await Promise.all(
                planetasApi.map(async (pl) => {
                    const res = await fetch(pl.url);
                    const data = await res.json();
                    return {
                        id: pl.uid,
                        name: data.result.properties.name,
                        gravity: data.result.properties.gravity,
                        population: data.result.properties.population,
                        climate: data.result.properties.climate,
                    };
                })
            );
            setPlanetas(planetasDetalles);
        };

        fetchData();
    }, []);



    return (
        <>
            <div className="estructura-pagina py-5 px-2">
                <div className="container">
                    <div className="body row">
                        <h1 className="text-bg-dark p-3 rounded-top-5 ">PERSONAJES</h1>
                        <div className="body-content col-md-12 row">
                            {personajes && personajes.length > 0 ? (
                                personajes.map(personaje => (
                                    <div className="card bg-dark col-md-2 my-3 mx-1" key={personaje.id} style={{ width: "300px", height: "410px" }}>
                                        <img src="..." className="mt-2 rounded text-light text-center" style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                        <div className="card-body text-light">
                                            <h5 className="card-title">{personaje.name}</h5>
                                            <p>Gender: {personaje.gender}</p>
                                            <p>Hair: {personaje.hair_color}</p>
                                            <p>Eye-color: {personaje.eye_color}</p>
                                        </div>
                                        <div className="card-body-links d-flex justify-content-between">
                                            <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                            <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => addFavorites(personaje.id)}><i className="fa-solid fa-heart"></i></button>
                                        </div>
                                    </div>
                                )
                                )
                            ) : (
                                <div className="col-12 mt-5 p-5 text-center">
                                    <h2 className="text-dark mb-3">No hay personajes registrados.</h2>
                                    <p className="lead">Vuelve pronto, ¡esperamos tener personajes para ti!</p>
                                </div>
                            )}
                        </div>
                        <h1 className="text-bg-dark p-3 rounded-top-5 ">VEHÍCULOS</h1>
                        <div className="body-content col-md-12 row">
                            {vehiculos && vehiculos.length > 0 ? (
                                vehiculos.map(vehiculo => (
                                    <div className="card bg-dark col-md-2 my-3 mx-1" key={vehiculo.id} style={{ width: "300px", height: "400px" }}>
                                        <img src="..." style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                        <div className="card-body text-light">
                                            <h5 className="card-title">{vehiculo.name}</h5>
                                            <p>model: {vehiculo.model}</p>
                                            <p>class: {vehiculo.vehicle_class}</p>
                                            <p>Crew: {vehiculo.crew}</p>
                                        </div>
                                        <div className="card-body-links d-flex justify-content-between">
                                            <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                            <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => { }}><i className="fa-solid fa-heart"></i></button>
                                        </div>
                                    </div>
                                )
                                )
                            ) : (
                                <div className="col-12 mt-5 p-5 text-center">
                                    <h2 className="text-dark mb-3">No hay vehiculos registrados.</h2>
                                    <p className="lead">Vuelve pronto, ¡esperamos tener vehiculos para ti!</p>
                                </div>
                            )}
                        </div>
                        <h1 className="text-bg-dark p-3 rounded-top-5 ">PLANETAS</h1>
                        <div className="body-content col-md-12 row">
                            {planetas && planetas.length > 0 ? (
                                planetas.map(planeta =>
                                    <div className="card bg-dark col-md-2 my-3 mx-1" key={planeta.id} style={{ width: "300px", height: "400px" }}>
                                        <img src="..." style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                        <div className="card-body text-light">
                                            <h5 className="card-title">{planeta.name}</h5>
                                            <p>Gravity: {planeta.gravity}</p>
                                            <p>Population: {planeta.population}</p>
                                            <p>Climate: {planeta.climate}</p>
                                        </div>
                                        <div className="card-body-links d-flex justify-content-between">
                                            <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                            <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => { }}><i className="fa-solid fa-heart"></i></button>
                                        </div>
                                    </div>
                                )

                            ) : (
                                <div className="col-12 mt-5 p-5 text-center">
                                    <h2 className="text-dark mb-3">No hay planetas registrados.</h2>
                                    <p className="lead">Vuelve pronto, ¡esperamos tener planetas para ti!</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

//por ahora el diseño de la pagina principal esta terminada, a falta de la logica.
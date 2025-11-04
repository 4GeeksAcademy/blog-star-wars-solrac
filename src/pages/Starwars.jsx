// import { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getPersonajeDetalle, getPersonajes, getPlanets, getVehiculos } from "../service/serviceAPI";
// import useGlobalReducer from "../hooks/useGlobalReducer";

// export const Starwars = () => {

//     return (
//         <>
//             <div className="estructura-pagina py-5 px-2">
//                 <div className="container">
//                     <div className="body row">
//                         <div className="text-end mb-4">
//                             <button className="btn btn-warning mb-2" onClick={() => setShowFavorite(!showFavorite)}>
//                                 {showFavorite ? "ocultar Favoritos" : `Favoritos (${favorites.length})`}
//                             </button>
//                             {showFavorite && (
//                                 <div className="favorites-list bg-dark text-light p-3 rounded mb-4">
//                                     <h4>Tus Favoritos:</h4>
//                                     {favorites.length > 0 ? (
//                                         <ul>
//                                             {favorites.map((fav) => (
//                                                 <li key={fav.id}>{fav.name}</li>
//                                             ))}
//                                         </ul>
//                                     ) : (
//                                         <p>No tienes favoritos aún.</p>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                         <h1 className="text-bg-dark p-3 rounded-top-5 ">PERSONAJES</h1>
//                         <div className="body-content col-md-12 row">
//                             {personajes && personajes.length > 0 ? (
//                                 personajes.map(personaje => (
//                                     <div className="card bg-dark col-md-2 my-3 mx-1" key={personaje.id} style={{ width: "300px", height: "410px" }}>
//                                         <img src="..." className="mt-2 rounded text-light text-center" style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
//                                         <div className="card-body text-light">
//                                             <h5 className="card-title">{personaje.name}</h5>
//                                             <p>Gender: {personaje.gender}</p>
//                                             <p>Hair: {personaje.hair_color}</p>
//                                             <p>Eye-color: {personaje.eye_color}</p>
//                                         </div>
//                                         <div className="card-body-links d-flex justify-content-between">
//                                             <Link to={`/vista-detallada/personajes/${personaje.id}`}>
//                                                 <button className="btn btn-outline-primary border-dark mx-1 my-3">Leer mas</button>
//                                             </Link>
//                                             <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => addFavorites(personaje)}><i className="fa-solid fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                 )
//                                 )
//                             ) : (
//                                 <div className="col-12 mt-5 p-5 text-center">
//                                     <h2 className="text-dark mb-3">No hay personajes registrados.</h2>
//                                     <p className="lead">Vuelve pronto, ¡esperamos tener personajes para ti!</p>
//                                 </div>
//                             )}
//                         </div>
//                         <h1 className="text-bg-dark p-3 rounded-top-5 ">VEHÍCULOS</h1>
//                         <div className="body-content col-md-12 row">
//                             {vehiculos && vehiculos.length > 0 ? (
//                                 vehiculos.map(vehiculo => (
//                                     <div className="card bg-dark col-md-2 my-3 mx-1" key={vehiculo.id} style={{ width: "300px", height: "400px" }}>
//                                         <img src="..." style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
//                                         <div className="card-body text-light">
//                                             <h5 className="card-title">{vehiculo.name}</h5>
//                                             <p>model: {vehiculo.model}</p>
//                                             <p>class: {vehiculo.vehicle_class}</p>
//                                             <p>Crew: {vehiculo.crew}</p>
//                                         </div>
//                                         <div className="card-body-links d-flex justify-content-between">
//                                             <Link to={`/vista-detallada/vehiculos/${vehiculo.id}`}>
//                                                 <button className="btn btn-outline-primary border-dark mx-1 my-3">Leer mas</button>
//                                             </Link>
//                                             <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => addFavorites(vehiculo)}><i className="fa-solid fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                 )
//                                 )
//                             ) : (
//                                 <div className="col-12 mt-5 p-5 text-center">
//                                     <h2 className="text-dark mb-3">No hay vehiculos registrados.</h2>
//                                     <p className="lead">Vuelve pronto, ¡esperamos tener vehiculos para ti!</p>
//                                 </div>
//                             )}
//                         </div>
//                         <h1 className="text-bg-dark p-3 rounded-top-5 ">PLANETAS</h1>
//                         <div className="body-content col-md-12 row">
//                             {planetas && planetas.length > 0 ? (
//                                 planetas.map(planeta =>
//                                     <div className="card bg-dark col-md-2 my-3 mx-1" key={planeta.id} style={{ width: "300px", height: "400px" }}>
//                                         <img src="..." style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
//                                         <div className="card-body text-light">
//                                             <h5 className="card-title">{planeta.name}</h5>
//                                             <p>Gravity: {planeta.gravity}</p>
//                                             <p>Population: {planeta.population}</p>
//                                             <p>Climate: {planeta.climate}</p>
//                                         </div>
//                                         <div className="card-body-links d-flex justify-content-between">
//                                             <Link to={`/vista-detallada/planetas/${planeta.id}`}>
//                                                 <button className="btn btn-outline-primary border-dark mx-1 my-3">Leer mas</button>
//                                             </Link>
//                                             <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => addFavorites(planeta)}><i className="fa-solid fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                 )

//                             ) : (
//                                 <div className="col-12 mt-5 p-5 text-center">
//                                     <h2 className="text-dark mb-3">No hay planetas registrados.</h2>
//                                     <p className="lead">Vuelve pronto, ¡esperamos tener planetas para ti!</p>
//                                 </div>)
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// // HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
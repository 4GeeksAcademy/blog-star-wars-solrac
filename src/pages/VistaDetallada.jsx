// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getPersonajeDetalle, getPlanetDescripcion, getPlanetDetalle, getVehiculoDetalle } from "../service/serviceAPI";

// export const VistaDetallada = () => {
//     const navigate = useNavigate()
//     const { tipo, id } = useParams()

//     // Creamos estados para guardar los detalles y manejar la carga
//     const [detalle, setDetalle] = useState(null); // ¡Perfecto!
//     const [loading, setLoading] = useState(true); // ¡Perfecto!

//     const description = getPlanetDescripcion()
//     console.log(description);

//     // Usamos useEffect para buscar los datos cuando 'tipo' o 'id' cambien
//     useEffect(() => {
//         const fetchDetalle = async () => {
//             setLoading(true); // Empezamos la carga
//             try {
//                 let data;
//                 // Decidimos qué API llamar basado en el 'tipo'
//                 switch (tipo) {
//                     case "personajes":
//                         data = await getPersonajeDetalle(id);
//                         break;
//                     case "vehiculos":
//                         data = await getVehiculoDetalle(id);
//                         break;
//                     case "planetas":
//                         data = await getPlanetDetalle(id);
//                         break;
//                     default:
//                         console.error("Tipo desconocido:", tipo);
//                         setDetalle(null);
//                         return;
//                 }
//                 setDetalle(data);
//             } catch (error) {
//                 console.error("Error al cargar detalles:", error);
//                 setDetalle(null);
//             } finally {
//                 setLoading(false); // Terminamos la carga
//             }
//         };

//         fetchDetalle();
//     }, [tipo, id]); // ¡Perfecto!

//     // Manejamos el estado de carga
//     if (loading) {
//         return <div className="container my-5 text-center"><h1>Cargando...</h1></div>;
//     }

//     // Manejamos si no se encontraron detalles
//     if (!detalle) {
//         return <div className="container my-5 text-center"><h1>Detalle no encontrado.</h1></div>;
//     }

//     // --- Renderizado Condicional ---
//     // Funciones "helper" para renderizar la sección de estadísticas
//     // según el 'tipo'.

//     const renderPersonajeStats = (data) => (
//         <>
//             <h4 className="col-md-2 border border-danger py-3">Name:
//                 <p className="my-4 text-primary">{data.name}</p>
//             </h4>
//             <h4 className="col-md-2 border border-danger py-3">Birth year:
//                 <p className="my-4 text-primary">{data.birth_year}</p>
//             </h4>
//             <h4 className="col-md-2 border border-danger py-3">Gender:
//                 <p className="my-4 text-primary">{data.gender}</p>
//             </h4>
//             <h4 className="col-md-2 border border-danger py-3">Height:
//                 <p className="my-4 text-primary">{data.height}</p>
//             </h4>
//             <h4 className="col-md-2 border border-danger py-3">Skin color:
//                 <p className="my-4 text-primary">{data.skin_color}</p>
//             </h4>
//             <h4 className="col-md-2 border border-danger py-3">Eye color:
//                 <p className="my-4 text-primary">{data.eye_color}</p>
//             </h4>
//         </>
//     );

//     const renderVehiculoStats = (data) => (
//         <>
//             <h4 className="col-md-3 border border-danger py-3">Name:
//                 <p className="my-4 text-primary">{data.name}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Model:
//                 <p className="my-4 text-primary">{data.model}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Class:
//                 <p className="my-4 text-primary">{data.vehicle_class}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Crew:
//                 <p className="my-4 text-primary">{data.crew}</p>
//             </h4>
//         </>
//     );

//     const renderPlanetaStats = (data) => (
//         <>
//             <h4 className="col-md-3 border border-danger py-3">Name:
//                 <p className="my-4 text-primary">{data.name}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Gravity:
//                 <p className="my-4 text-primary">{data.gravity}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Population:
//                 <p className="my-4 text-primary">{data.population}</p>
//             </h4>
//             <h4 className="col-md-3 border border-danger py-3">Climate:
//                 <p className="my-4 text-primary">{data.climate}</p>
//             </h4>
//         </>
//     );

//     return (
//         <>
//             <div className="container my-5">
//                 <div className="row border-bottom border-danger pb-5">
//                     <div className="img col-lg-6">
//                         <div className="ratio ratio-4x3 text-start mb-3 ">
//                             <img src="https://imgs.search.brave.com/knVacfIm-dK3GGLMcOtFTIiWPok02Crv_KWbn5_e2NE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2lzdGFyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNi9wZXJzb25h/amVzLWRlLXN0YXIt/d2Fycy53ZWJw" style={{ objectFit: "cover", objectPosition: "top" }} alt="imagen de la tarjeta" />
//                         </div>
//                     </div>
//                     <div className="description col-lg-6 bg-secondary bg-opacity-25 mb-3">
//                         {/* 👇 AQUI ESTÁ EL CAMBIO 👇 */}
//                         <h1 className="mt-2 text-center">{detalle.name}</h1>
//                         <p>Aquí puedes ver los detalles de '{detalle.description}'. Esta API no provee una descripción larga, así que puedes rellenar este espacio con más información si lo deseas.</p>
//                     </div>
//                 </div>

//                 <div className="row my-3">
//                     {/* 👇 AQUÍ ESTÁ LA LÓGICA CONDICIONAL 👇 */}
//                     {/* Mostramos las estadísticas correctas según el 'tipo' */}

//                     {tipo === "personajes" && renderPersonajeStats(detalle)}
//                     {tipo === "vehiculos" && renderVehiculoStats(detalle)}
//                     {tipo === "planetas" && renderPlanetaStats(detalle)}

//                 </div>
//             </div>
//         </>
//     );
// };

// // HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
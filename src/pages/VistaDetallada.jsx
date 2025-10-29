import { useNavigate, useParams } from "react-router-dom";
import { getPersonajeDetalle, getPersonajes, getPlanetDetalle, getVehiculoDetalle } from "../service/serviceAPI";
import { useEffect } from "react";

export const VistaDetallada = () => {
    const navigate = useNavigate()
    const {id_personaje, id_vehiculo, id_planeta} = useParams()

    useEffect(()=>{
        getPersonajeDetalle(id_personaje)
        getPlanetDetalle(id_planeta)
        getVehiculoDetalle(id_vehiculo)
    },[])

    return (
        <>
            <div className="container my-5">
                <div className="row border-bottom border-danger pb-5">
                    <div className="img col-lg-6">
                        <div className="ratio ratio-4x3 text-start mb-3 ">
                            <img src="https://imgs.search.brave.com/knVacfIm-dK3GGLMcOtFTIiWPok02Crv_KWbn5_e2NE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2lzdGFyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNi9wZXJzb25h/amVzLWRlLXN0YXIt/d2Fycy53ZWJw" style={{ objectFit: "cover", objectPosition: "top" }} alt="imagen de la tarjeta" />
                        </div>
                    </div>
                    <div className="description col-lg-6 bg-secondary bg-opacity-25 mb-3">
                        <h1 className="mt-2 text-center">AQUI VA EL NOMBRE DE LA TARJETA</h1>
                        <p>aqui va la descripcion del personaje o la tarjeta que queremos ver en detalle.</p>
                    </div>
                </div>

                <div className="row my-3">
                    <h4 className="col-md-2 border border-danger py-3">Name:
                        <p className="my-4 text-primary">luke Skywalker</p>
                    </h4>
                    <h4 className="col-md-2 border border-danger py-3">Birth year:
                        <p className="my-4 text-primary">1955</p>

                    </h4>
                    <h4 className="col-md-2 border border-danger py-3">Gender:
                        <p className="my-4 text-primary">male</p>

                    </h4>
                    <h4 className="col-md-2 border border-danger py-3">Height:
                        <p className="my-4 text-primary">172</p>

                    </h4>
                    <h4 className="col-md-2 border border-danger py-3">Skin color:
                        <p className="my-4 text-primary">fair</p>

                    </h4>
                    <h4 className="col-md-2 border border-danger py-3">Eye color:
                        <p className="my-4 text-primary">yellow</p>

                    </h4>
                </div>
            </div>
        </>
    );
};

//Vista detallada ya hecha a falta de la lógica.
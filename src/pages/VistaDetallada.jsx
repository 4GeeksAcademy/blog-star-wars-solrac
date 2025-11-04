import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetails } from "../Items/ItemDetails";

export const VistaDetallada = () => {
    const navigate = useNavigate()
    const { tipo, id } = useParams()

    // Creamos estados para guardar los detalles y manejar la carga
    // const [detalle, setDetalle] = useState(null); // ¡Perfecto!
    // const [loading, setLoading] = useState(true); // ¡Perfecto!

    // Manejamos el estado de carga
    // if (loading) {
    //     return <div className="container my-5 text-center"><h1>Cargando...</h1></div>;
    // }

    // Manejamos si no se encontraron detalles
    // if (!detalle) {
    //     return <div className="container my-5 text-center"><h1>Detalle no encontrado.</h1></div>;
    // }

    useEffect(()=>{
        
    },[tipo, id])


    return (
        <>
            <ItemDetails/>
        </>
    );
};

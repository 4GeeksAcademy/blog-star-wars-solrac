import { useNavigate } from "react-router-dom";

export const VistaDetallada = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h1 className="text-center">Hola desde la pagina de vista detallada</h1>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger" onClick={() => navigate("/")}>Volver al home.</button>
            </div>

        </>
    );
};
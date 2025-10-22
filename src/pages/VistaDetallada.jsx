import { useNavigate } from "react-router-dom";

export const VistaDetallada = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container my-5">
                <div className="row border-bottom border-danger ">
                    <div className="img col-md-6">
                        <div className="ration ratio-4x3 text-center mb-3">
                            <img src="https://imgs.search.brave.com/_EmrUMgElbGCH5dVXTOW2RhLlmAxrLhgKbvc5IBfEgk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lcy5y/b2xsaW5nc3RvbmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzExLzIwLXBl/cnNvbmFqZXMtZW1i/bGVtYXRpY29zLWRl/LVN0YXItV2Fycy0x/MDI0eDcxOS5qcGc" style={{ objectFit: "cover", objectPosition: "top" }} alt="imagen de la tarjeta" />
                        </div>
                    </div>
                    <div className="description col-md-6 bg-secondary bg-opacity-25 mb-3">
                        <h1 className="mt-2 text-center">AQUI VA EL NOMBRE DE LA TARJETA</h1>
                        <p>aqui va la descripcion del personaje o la tarjeta que queremos ver en detalle.</p>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </>
    );
};
import { useNavigate } from "react-router-dom";

export const Starwars = () => {

    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="navbar-text text-light">
                        STARWARS API // BROWSER DATABANK // BY SOLRAC.CODE
                    </span>
                </div>
            </nav>
            <div className="estructura-pagina bg-dark py-5 px-2">
                <div className="body row">
                    <div className="navbar-lateral col-md-2 text-light">
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => navigate("/")}>HOME</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">PERSONAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">PLANETAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">VEHICULOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">FAVORITOS</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate("/starwars")}>IR A VISTA GENERAL</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate("/vista-detallada")}>IR A VISTA DETALLADA</button>
                            </li>
                        </ul>
                    </div>
                    <div className="body-content col-md-10 row">
                        <div className="card col-md-2 bg-dark mx-3 my-2" style={{ width: "200px", height: "300px" }}>
                            <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" style={{ height: "150px", backgroundRepeat: "no-repeat", objectFit: "cover" }} alt="imagen del artículo" />
                            <div className="card-body text-light">
                                <h5 className="card-title">ADMIRAL COBURN</h5>
                            </div>
                            <div className="card-body-links d-flex justify-content-center">
                                <button className="btn btn-outline-danger border-dark mx-1" onClick={() => { }}>ver</button>
                                <button className="btn btn-outline-danger border-dark mx-1" onClick={() => { }}>Favoritos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center m-5">
                <button className="btn btn-danger" onClick={() => navigate("/")}>Volver al home.</button>
            </div>
        </>
    );
};

//por ahora el diseño de la pagina principal esta terminada, a falta de la logica.
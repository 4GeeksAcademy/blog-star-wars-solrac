import { useNavigate } from "react-router-dom";

export const Starwars = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="estructura-pagina py-5 px-2">
                <div className="container">
                    <div className="body row">
                        <h1 className="text-bg-dark p-3 rounded-top-5 ">PERSONAJES</h1>
                        <div className="body-content col-md-12 row">
                            <div className="card bg-dark col-md-2 my-3 " style={{ width: "300px", height: "400px" }}>
                                <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">ADMIRAL COBURN</h5>
                                    <p>Gender:</p>
                                    <p>Hair:</p>
                                    <p>Eye-color:</p>
                                </div>
                                <div className="card-body-links d-flex justify-content-between">
                                    <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                    <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => { }}><i class="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-bg-dark p-3 rounded-top-5 ">VEHÍCULOS</h1>
                        <div className="body-content col-md-12 row">
                            <div className="card bg-dark col-md-2 my-3 " style={{ width: "300px", height: "400px" }}>
                                <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">ADMIRAL COBURN</h5>
                                    <p>Gender:</p>
                                    <p>Hair:</p>
                                    <p>Eye-color:</p>
                                </div>
                                <div className="card-body-links d-flex justify-content-between">
                                    <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                    <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => { }}><i class="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                                                <h1 className="text-bg-dark p-3 rounded-top-5 ">PLANETAS</h1>
                        <div className="body-content col-md-12 row">
                            <div className="card bg-dark col-md-2 my-3 " style={{ width: "300px", height: "400px" }}>
                                <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} alt="imagen del artículo" />
                                <div className="card-body text-light">
                                    <h5 className="card-title">ADMIRAL COBURN</h5>
                                    <p>Gender:</p>
                                    <p>Hair:</p>
                                    <p>Eye-color:</p>
                                </div>
                                <div className="card-body-links d-flex justify-content-between">
                                    <button className="btn btn-outline-primary border-dark mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                                    <button className="btn btn-outline-danger border-dark mx-1 my-3" onClick={() => { }}><i class="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

//por ahora el diseño de la pagina principal esta terminada, a falta de la logica.
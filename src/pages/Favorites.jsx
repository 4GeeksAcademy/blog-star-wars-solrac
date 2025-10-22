export const Favorites = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h1 className="text-bg-primary  text-dark p-3 rounded-top-5 ">PÁGINA DE TUS ARTICULOS FAVORITOS</h1>
                    <div className="card bg-secondary bg-opacity-75 col-md-2 my-3 " style={{ width: "300px", height: "410px" }}>
                        <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" className="mt-2 rounded" 
                        style={{ backgroundRepeat: "no-repeat", objectFit: "cover", position: "top" }} 
                        alt="imagen del artículo" />
                        <div className="card-body text-light">
                            <h5 className="card-title">ADMIRAL COBURN</h5>
                            <p>Gender:</p>
                            <p>Hair:</p>
                            <p>Eye-color:</p>
                        </div>
                        <div className="card-body-links d-flex justify-content-between">
                            <button className="btn text-primary mx-1 my-3" onClick={() => navigate("/vista-detallada")}>Leer mas</button>
                            <button className="btn mx-1 my-3" onClick={() => { }}><i className="fa-solid fa-trash text-danger"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
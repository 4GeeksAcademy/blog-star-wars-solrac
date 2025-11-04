import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const ItemCard = () => {
    const { store, dispatch } = useGlobalReducer()

    const getCharacter = async () => {
        const response = await fetch(`${store.baseUrl}/characters`);

        if (!response.ok) {
            console.log("No es posible contactar con la API");
            return;
        }

        const data = await response.json()

        dispatch({ type: 'set_personajes', payload: data.characters })
    }
    //------------------------------------------------------------------------------
    const getAkatsuki = async () => {
        const response = await fetch(`${store.baseUrl}/akatsuki`);

        if (!response.ok) {
            console.log("No es posible contactar con la API");
            return;
        }

        const data = await response.json()

        dispatch({ type: 'set_akatsuki', payload: data.akatsuki })
    }
    //------------------------------------------------------------------------------
    const getKara = async () => {
        const response = await fetch(`${store.baseUrl}/kara`)

        if (!response.ok) {
            console.log("No es posible contactar con la API");
            return;
        }
        const data = await response.json()

        dispatch({ type: 'set_kara', payload: data.kara })
    }
    //------------------------------------------------------------------------------


    useEffect(() => {
        getCharacter()
        getAkatsuki()
        getKara()
    }, [])

    return (
        <>
            {store.personajes && store.personajes.length > 0 ? (
                store.personajes.map((personaje, index) => (
                    <div className="col">
                        <div className="card my-3" key={index} style={{ width: "18rem" }}>
                            <img src={personaje.images[0]} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{personaje.name}</h5>
                            </div>
                            <Link to={`/vista-detallada/personajes/${index}`}>
                                <button className="btn btn-outline-success my-2 border"> Ver mas</button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <p>No hay cartas disponibles</p>
                </div>
            )
            }
        </>
    )
}





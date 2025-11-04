import useGlobalReducer from "../hooks/useGlobalReducer"

export const ItemDetails = () => {

    const { store, dispacth } = useGlobalReducer()

    return (
        <>
            {store.personajes && store.personajes.length > 0 ? (
                store.personajes.map((c) => (
                    <div className="container my-5">
                        <div className="row border-bottom border-danger pb-5">
                            <div className="img col-lg-6">
                                <div className="ratio ratio-4x3 text-start mb-3 ">
                                    <img src={c.images} style={{ objectFit: "cover", objectPosition: "top" }} alt="imagen de la tarjeta" />
                                </div>
                            </div>
                            <div className="description col-lg-6 bg-secondary bg-opacity-25 mb-3">
                                <h1 className="mt-2 text-center">{c.name}</h1>
                                <ul className="text-center my-3">Aquí puedes ver los detalles.</ul>
                                <li className="mx-3 my-3">
                                    <span>DEBUT:</span>
                                    <p className="mt-2">{c.debut}manga estos son ejemplos hasta que traiga toda la informacion</p>
                                </li>
                                <li className="mx-3 my-3">
                                    <span>FAMILY:</span>
                                    <p className="mt-2">{c.family}family estos son ejemplos hasta que traiga toda la informacion</p>
                                </li>
                                <li className="mx-3 my-3">
                                    <span>NATURE-TYPE:</span>
                                    <p className="mt-2">{c.natureType}winder estos son ejemplos hasta que traiga toda la informacion</p>
                                </li>
                            </div>
                        </div>

                        <div className="row my-3">

                        </div>
                    </div>
                ))
            ): (
                <div className="text-center">
                    <h1>No hay ninguna información.</h1>
                </div>
            )}

        </>
    )
}
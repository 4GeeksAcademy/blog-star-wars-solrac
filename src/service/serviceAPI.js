
// https://www.swapi.tech/api/ => url base para la peticion a la API ó
// https://swapi.tech/api/

//----------------------------------------------------------------------------------
export const getPersonajes = async () => {
    const response = await fetch("https://www.swapi.tech/api/people")

    if (!response.ok) {
        console.log("No es posible conectar con la API");
        return [];
    }

    const data = await response.json();
    console.log(data);

    return data.results;

};

//Funcion funciona correctamente.

export const getPersonajeDetalle = async (uid) => {
    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
    const data = await response.json();
    return data.result.properties;
};


//----------------------------------------------------------------------------------
export const getVehiculos = async () => {
    const response = await fetch("https://www.swapi.tech/api/vehicles")

    if (!response.ok) {
        console.log("No es posible conectar con la API");
        return [];
    }

    const data = await response.json();
    console.log(data);

    return data.results;

}

//Funcion funciona correctamente.

export const getVehiculoDetalle = async (uid) => {
    const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
    const data = await response.json();
    return data.result.properties;
};

//----------------------------------------------------------------------------------
export const getPlanets = async () => {
    const response = await fetch("https://www.swapi.tech/api/planets")

    if (!response.ok) {
        console.log("No es posible conectar con la API");
        return [];
    }

    const data = await response.json();
    console.log(data);

    return data.results;

}

//Funcion funciona correctamente.

export const getPlanetDetalle = async (uid) => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
    const data = await response.json();
    return data.result.properties;
};

//----------------------------------------------------------------------------------

// export const getPlanetDescripcion = async () => {
//     const response = await fetch("https://www.swapi.tech/api/planets/?format=api");
//     const data = await response.json()
//     return data;
// }

// esta peticion a la API la estoy probando haber si consigo la descripcion de la carta
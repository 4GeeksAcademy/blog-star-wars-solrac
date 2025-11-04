import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { ItemCard } from "../Items/ItemCard.jsx";

export const Home = () => {

	const imageBg = "https://static.wikia.nocookie.net/naruto/images/2/26/Portada_Personajes_HD.png/revision/latest/scale-to-width-down/1000?cb=20170823021715&path-prefix=es"


	return (
		<div className="container-fluid bg-success text-center" >
			<div className="row">
				<ItemCard />
			</div>
		</div>
	);
};


// HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
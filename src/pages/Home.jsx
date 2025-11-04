import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { ItemCard } from "../Items/ItemCard.jsx";

export const Home = () => {



	return (
		<div className="text-center my-5 mx-5 ">
			<div className="row">
				<ItemCard />
			</div>
		</div>
	);
};


// HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
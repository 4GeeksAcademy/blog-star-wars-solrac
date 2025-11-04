import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const getCharacter = async () => {
		const response = await fetch("https://dattebayo-api.onrender.com/characters");

		if (!response.ok) {
			console.log("No es posible contactar con la API");
			return;
		}

		const data = await response.json()

		const payload = data;

		dispatch({ type: "set_characters", action: payload })
	}

	
	useEffect(() => {
		getCharacter();

	}, [])

	return (
		<div className="text-center mt-5">
			{store.charcters && store.characters.lenght > 0 ? (
				store.characters.map(c => (
					<div className="card" key={id} style={{ width: "18rem;" }}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">tittle</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				))
			) : (
				<div>
					<p>No hay cartas disponibles</p>
				</div>
			)
			}
		</div>
	);
};


// HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
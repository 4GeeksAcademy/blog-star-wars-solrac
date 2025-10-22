import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar nav-light ">
			<div className="container">
				<Link to="/">
					<i className="fa-solid fa-jedi"> STARWARS</i>		
				</Link>
				<div className="ml-auto">
					<Link to="/starwars">
						<button className="btn btn-primary">Ir a vista general</button>
					</Link>
					<Link to="/vista-detallada">
						<button className="btn btn-success mx-2">Ir a vista detallada</button>
					</Link>
					<Link to="favorites">
						<button className="btn btn-warning">Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

//navbar provisional para moverme rapidamente por mis vistas.
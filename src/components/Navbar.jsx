import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<button className="btn btn-light">HOME</button>
				</Link>
				<div className="ml-auto">
					<Link to="/starwars">
						<button className="btn btn-primary">Ir a vista general</button>
					</Link>
					<Link to="/vista-detallada">
						<button className="btn btn-success mx-2">Ir a vista detallada</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

//navbar provisional para moverme rapidamente por mis vistas.
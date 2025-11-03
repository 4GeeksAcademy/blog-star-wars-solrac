import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar nav-light ">
			<div className="container">
				<Link to="/">
					<i className="fa-solid fa-jedi"> Naruto.</i>		
				</Link>
			</div>
		</nav>
	);
};

// HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
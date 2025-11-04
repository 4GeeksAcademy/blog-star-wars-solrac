import { Link } from "react-router-dom";

export const Navbar = () => {

	const logo = "https://static.wikia.nocookie.net/naruto/images/9/99/Naruto_ilustraci%C3%B3n.png/revision/latest?cb=20120328093346&path-prefix=es"
	return (
		<nav className="navbar nav-light ">
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} style={{width: "80px"}}/>	
				</Link>
			</div>
		</nav>
	);
};

// HAY QUE EMPEZAR DE NUEVO EL PROYECTO NUEVA API LA DE NARUTO
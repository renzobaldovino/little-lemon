import "./navbar.css";
import logo from "../../assets/Logo.svg";

import { NAVLINKS } from "../../utils/navLinks";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const loc = useLocation();

	return (
		<header className='navbar'>
			<nav>
				<div className='logo'>
					<img src={logo} alt='Little Lemon Logo' />
				</div>
				<ul className='nav-links'>
					{NAVLINKS.map((nav) => (
						<li key={nav.name}>
							<Link
								to={nav.path}
								className={
									loc.pathname === nav.path ? "active" : ""
								}
							>
								{nav.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

import "./footer.css";
import logo from "../../assets/logo-white.png";

import { Link } from "react-router-dom";
import { NAVLINKS } from "../../utils/navLinks";
import { CONTACTS } from "../../utils/contacts";
import { SOCIAL_MEDIA } from "../../utils/socialMedia";

const Footer = () => {
	return (
		<section className='footer'>
			<div>
				<img src={logo} />
				<nav>
					<h2>SITEMAP</h2>
					<ul>
						{NAVLINKS.map((link) => (
							<li key={link.name}>
								<Link to={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='contact'>
					<h2>CONTACT US</h2>
					<ul>
						{CONTACTS.map((contact) => (
							<li key={contact.name}>
								<span>{contact.icon}</span>
								<span>{contact.details}</span>
							</li>
						))}
					</ul>
				</div>
				<div className='connect'>
					<h2>CONNECT WITH US</h2>
					<ul>
						{SOCIAL_MEDIA.map((social) => (
							<li key={social.name}>
								<a href={social.link} target='_blank'>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Footer;

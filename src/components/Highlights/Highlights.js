import "./highlights.css";
import { HIGHLIGHTS } from "../../utils/highlights";
import Highlight from "../Highlight/Highlight";

const Highlights = () => {
	return (
		<section className='highlights'>
			<div>
				<header>
					<h1>This Week's Specials</h1>
					<button className='btn'>Online Menu</button>
				</header>
				<div className='specials-container'>
					{HIGHLIGHTS.map((special) => (
						<Highlight key={special.title} {...special} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Highlights;

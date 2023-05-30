import "./highlight.css";
import { BiCycling } from "react-icons/bi";

const Highlight = ({ image, title, price, description }) => {
	return (
		<article className='highlight'>
			<div className='img-container'>
				<img src={image} alt={title} />
			</div>
			<div className='details'>
				<div>
					<h2>{title}</h2>
					<p>{price}</p>
				</div>
				<p>{description}</p>
				<button>
					Order a delivery
					<BiCycling className='icon' />
				</button>
			</div>
		</article>
	);
};

export default Highlight;

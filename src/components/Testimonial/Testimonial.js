import "./testimonial.css";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ name, photo, rating, review }) => {
	return (
		<article className='testimonial'>
			<img src={photo} alt={name + "-photo"} />
			<h2>{name}</h2>
			<div className='rating'>
				{[...Array(rating)].map((star, index) => (
					<FaStar key={index} className='icon' />
				))}
			</div>
			<p>{review}</p>
		</article>
	);
};

export default Testimonial;

import "./testimonials.css";
import { TESTIMONIALS } from "../../utils/testimonials";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
	return (
		<section className='testimonials'>
			<div>
				<h1>Testimonials</h1>
				<div className='container'>
					{TESTIMONIALS.map((testimonial) => (
						<Testimonial key={testimonial.name} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

import "./hero.css";
import HeroImage from "../../assets/hero-image.jpg";

const Hero = () => {
	return (
		<section className='hero'>
			<div className='content'>
				<div className='spiel'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused
						on traditional recipes served with a modern twist.
					</p>
					<button className='btn'>Reserve a Table</button>
				</div>
				<div className='img-container'>
					<img src={HeroImage} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Hero;

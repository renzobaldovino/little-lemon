import "./about.css";
import marioAdrian1 from "../../assets/mario-and-adrian1.jpg";
import marioAdrian2 from "../../assets/mario-and-adrian2.jpg";

const About = () => {
	return (
		<section className='about'>
			<div>
				<div className='spiel'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua
						dolor do amet sint. Velit officia consequat duis enim
						velit mollit. Exercitation veniam consequat sunt nostrud
						amet. Amet minim mollit non deserunt ullamco est sit
						aliqua dolor do amet sint. Velit officia consequat duis
						enim velit mollit.
					</p>
				</div>
				<div className='images'>
					<div className='img-container'>
						<img src={marioAdrian1} alt="mario-adrian" />
						<img src={marioAdrian2} alt="mario-adrian" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

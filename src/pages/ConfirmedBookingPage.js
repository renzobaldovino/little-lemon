import { BiCheckCircle } from "react-icons/bi";

const ConfirmedBookingPage = () => {
	return (
		<section className='full confirmed-booking'>
			<div>
				<BiCheckCircle className='icon' />
				<h1>Your reservation has been confirmed.</h1>
				<p>You will receive an email with all the details.</p>
			</div>
		</section>
	);
};

export default ConfirmedBookingPage;

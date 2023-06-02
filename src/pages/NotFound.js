import { BiError } from "react-icons/bi";

const NotFound = () => {
	return (
		<section className='full'>
			<div>
				<BiError className='icon' />
				<h1>Page Not Found</h1>
			</div>
		</section>
	);
};

export default NotFound;

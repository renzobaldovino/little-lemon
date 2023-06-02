import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

const updateTimes = (availableTimes, date) => {
	const res = fetchAPI(new Date(date));
	return res.length !== 0 ? res : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
	...initialAvailableTimes,
	...fetchAPI(new Date()),
];

const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);
	const navigate = useNavigate();

	const submitData = (formData) => {
		const res = submitAPI(formData);
		if (res) navigate("/confirmed-booking");
	};

	return (
		<>
			<BookingForm
				availableTimes={availableTimes}
				dispatch={dispatch}
				submitData={submitData}
			/>
		</>
	);
};

export default BookingPage;

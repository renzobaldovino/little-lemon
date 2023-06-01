import "./booking-form.css";

import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitData }) => {
	const MIN_DATE = new Date().toISOString().split("T")[0];
	const MIN_GUESTS = 1;
	const MAX_GUESTS = 10;
	const OCCASIONS = ["Birthday", "Anniversary"];

	const [date, setDate] = useState(MIN_DATE);
	const [time, setTime] = useState(availableTimes[0]);
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState(OCCASIONS[0]);

	const isInputValid = (input) => input !== "";

	const isFormValid = () =>
		isInputValid(date) &&
		isInputValid(time) &&
		isInputValid(guests) &&
		isInputValid(occasion);

	const handleDateChange = (e) => {
		const val = e.target.value;
		setDate(val);
		dispatch(val);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		submitData({
			date,
			time,
			guests,
			occasion,
		});
	};

	return (
		<section className='booking-form'>
			<div>
				<h1>Reserve a Table</h1>
				<form onSubmit={handleFormSubmit}>
					<div className='input-field'>
						<label htmlFor='date'>Choose Date</label>
						<input
							type='date'
							id='date'
							min={MIN_DATE}
							value={date}
							onChange={handleDateChange}
						/>
						{!isInputValid(date) && (
							<p
								data-testid='error-message'
								className='error-message'
							>
								Please choose a valid date
							</p>
						)}
					</div>
					<div className='input-field'>
						<label htmlFor='time'>Choose Time</label>
						<select
							id='time'
							value={time}
							onChange={(e) => setTime(e.target.value)}
						>
							{availableTimes?.map((time) => (
								<option data-testid='time-option' key={time}>
									{time}
								</option>
							))}
						</select>
						{!isInputValid(time) && (
							<p
								data-testid='error-message'
								className='error-message'
							>
								Please choose a valid time
							</p>
						)}
					</div>
					<div className='input-field'>
						<label htmlFor='guests'>Number of Guests</label>
						<input
							type='number'
							id='guests'
							min={MIN_GUESTS}
							max={MAX_GUESTS}
							value={guests}
							onChange={(e) => setGuests(e.target.value)}
						/>
						{!isInputValid(guests) && (
							<p
								data-testid='error-message'
								className='error-message'
							>
								Please enter a number between 1 and 10
							</p>
						)}
					</div>
					<div className='input-field'>
						<label htmlFor='occasion'>Occasion</label>
						<select
							id='occasion'
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
						>
							{OCCASIONS.map((occasion) => (
								<option
									data-testid='occasion-option'
									key={occasion}
								>
									{occasion}
								</option>
							))}
						</select>
						{!isInputValid(occasion) && (
							<p
								data-testid='error-message'
								className='error-message'
							>
								Please choose a valid occasion
							</p>
						)}
					</div>
					<button
						type='submit'
						disabled={!isFormValid()}
						className='btn'
					>
						Make Your reservation
					</button>
				</form>
			</div>
		</section>
	);
};

export default BookingForm;

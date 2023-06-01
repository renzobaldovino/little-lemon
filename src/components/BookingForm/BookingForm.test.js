import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking form", () => {
	const availableTimes = ["17:00", "17:30"];
	const today = new Date().toISOString().split("T")[0];
	const dispatch = jest.fn();
	const submitData = jest.fn();

	test("should correctly render all fields and their default values", async () => {
		render(
			<BookingForm
				availableTimes={availableTimes}
				submitData={submitData}
			/>
		);

		const dateInput = screen.getByLabelText(/Choose Date/);
		const timeSelect = screen.getByLabelText(/Choose Time/);
		const timeOptions = await screen.findAllByTestId("time-option");
		const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
		const occasionSelect = screen.getByLabelText(/Occasion/);
		const occasionOptions = await screen.findAllByTestId(`occasion-option`);
		const submitButton = screen.getByRole("button");

		expect(dateInput).toBeInTheDocument();
		expect(dateInput).toHaveAttribute("type", "date");
		expect(dateInput).toHaveAttribute("id", "date");
		expect(dateInput).toHaveValue(today);

		expect(timeSelect).toBeInTheDocument();
		expect(timeSelect).toHaveAttribute("id", "time");
		expect(timeOptions.length).toBe(2);

		expect(numberOfGuestsInput).toBeInTheDocument();
		expect(numberOfGuestsInput).toHaveAttribute("type", "number");
		expect(numberOfGuestsInput).toHaveAttribute("id", "guests");
		expect(numberOfGuestsInput).toHaveValue(1);

		expect(occasionSelect).toBeInTheDocument();
		expect(occasionSelect).toHaveAttribute("id", "occasion");
		expect(occasionOptions.length).toBe(2);

		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toHaveAttribute("type", "submit");
		expect(submitButton).toBeEnabled();
	});

	test("should successfully submit form with default values", () => {
		render(
			<BookingForm
				availableTimes={availableTimes}
				submitData={submitData}
			/>
		);

		const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);

		expect(submitData).toHaveBeenCalledWith({
			date: today,
			time: availableTimes[0],
			guests: 1,
			occasion: "Birthday",
		});
	});

	test(`should display an error message and disable sumbit button when date 
    field's value is empty`, () => {
		render(
			<BookingForm
				availableTimes={availableTimes}
				dispatch={dispatch}
				submitData={submitData}
			/>
		);

		const dateInput = screen.getByLabelText(/Choose Date/);
		fireEvent.change(dateInput, { target: { value: "" } });
		fireEvent.blur(dateInput);
		const errorMessage = screen.getByTestId("error-message");
		const submitButton = screen.getByRole("button");

		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toHaveTextContent("Please choose a valid date");
		expect(submitButton).toBeDisabled();
	});

	test(`should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
		render(
			<BookingForm
				availableTimes={availableTimes}
				dispatch={dispatch}
				submitData={submitData}
			/>
		);

		const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
		fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
		fireEvent.blur(numberOfGuestsInput);
		const errorMessage = screen.getByTestId("error-message");
		const submitButton = screen.getByRole("button");

		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toHaveTextContent(
			"Please enter a number between 1 and 10"
		);
		expect(submitButton).toBeDisabled();
	});
});

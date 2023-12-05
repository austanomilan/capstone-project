import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "./components/BookingForm";

test('Submission is disabled if number of gueste are less than 2', () => {
  render(<BookingForm />);
  const h2Element = screen.getByText("Reservation Form");
  
  const labelElement = screen.getByLabelText("Choose Time:");
  
  const dateInput = screen.getByLabelText("Choose Date:");
  fireEvent.change(dateInput, { target: { value: "1" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(h2Element).toBeInTheDocument();
  expect(labelElement).toBeInTheDocument();
  expect(submitButton).toHaveAttribute("disabled");
});



/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
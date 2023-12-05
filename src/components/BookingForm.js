import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";


const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("");

   const isDisabled = Number(guests) < 2;

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <>
    <Helmet>
      <title>Little Lemon</title>
      <meta name="Author" content="Little Lemon"/>
      <meta name="description" content="Newly added dishes"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Eat and place your order for reservstion"/>
      <meta name="og:image" content="https://example.com/one-place-fishing-store.jpg"/>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Helmet>
    <header>
      <section
        style={{
          height: "32rem",
        }}
      >
        <form onSubmit={handleSumbit}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              bottom: "3rem",
              color: "#495E57",
            }}
          >
            Reservation Form
          </h2>
          <fieldset
            className="formField"
            style={{
              position: "relative",
              bottom: "2rem",
              height: "18rem",
            }}
          >
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select Time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>{props.times}</option>
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="2" value={guests} onChange={(e) => {setGuests(e.target.value)}} type="number" placeholder="0" max="10" required/>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value="Make Your Reservation" disabled={isDisabled} onSubmit={handleSumbit}/>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
    </>
  );
};

export default BookingForm;

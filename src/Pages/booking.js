import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Components/Booking/booking.css";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "90c650a1-f000-46a2-9b1f-0127c8fec237");
    formData.append("selected_date", selectedDate?.toLocaleDateString() || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Booking Submitted Successfully!");
      event.target.reset();
      setSelectedDate(null);
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Tee Time</h1>
      <p>Select a date and let us know how many are coming!</p>

      <form className="booking-form" onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="90c650a1-f000-46a2-9b1f-0127c8fec237" />

        <label>Name*</label>
        <input type="text" name="name" required />

        <label>Email*</label>
        <input type="email" name="email" required />

        <label>Phone*</label>
        <input type="tel" name="phone" required />

        <label>Select a Date*</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          placeholderText="Click to select a date"
          className="custom-datepicker"
          required
        />

        <label>Number of People*</label>
        <input type="number" name="people" min="1" required />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Anything else we should know?"
        />

        <button type="submit">Submit Booking</button>
        <span>{result}</span>
      </form>
    </div>
  );
};

export default Booking;

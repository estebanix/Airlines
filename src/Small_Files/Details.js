import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

export default function Details(props) {
  const { flightData, selectedFrom, selectedTo, selectedDate, selectedPassengers, formData, setFormData } = useContext(Context);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleFinishOrder = () => {
    console.log("Passenger Details:");
    console.log(formData);
  };

  const handleFormChange = (index, field, value) => {
    setFormData(prevFormData => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [field]: value
      };
      return updatedFormData;
    });
  };

  const handleSeatSelection = (index, seatNumber) => {
    const isSeatAvailable = flightData
      .filter((dat) => dat.from === selectedFrom && dat.to === selectedTo && dat.departure === selectedDate)
      .flatMap((dat) => dat.seats.filter((seat) => seat.available && !selectedSeats.includes(seat.number)))
      .some((seat) => seat.number === seatNumber);

    if (isSeatAvailable) {
      setSelectedSeats(prevSelectedSeats => {
        const updatedSelectedSeats = [...prevSelectedSeats];
        updatedSelectedSeats[index] = seatNumber - 1;
        return updatedSelectedSeats;
      });
    }
  };

  const passengers = [];
  let isFormComplete = false;

  for (let i = 0; i < selectedPassengers; i++) {
    const availableSeats = flightData
      .filter((dat) => dat.from === selectedFrom && dat.to === selectedTo && dat.departure === selectedDate)
      .flatMap((dat) => dat.seats.filter((seat) => seat.available && !selectedSeats.includes(seat.number)));

    passengers.push(
      <form className="passenger-card" key={i}>
        <p>
          First Name:{" "}
          <input type="text" onChange={(e) => handleFormChange(i, "firstName", e.target.value)} />
        </p>
        <p>
          Last Name:{" "}
          <input type="text" onChange={(e) => handleFormChange(i, "lastName", e.target.value)} />
        </p>
        <p>Meal:</p>
        <div className="meat--choice">
          <label>
            With Meat
            <input
              type="radio"
              name={`meal-${i}`}
              value="Meat"
              onChange={(e) => handleFormChange(i, "mealOption", e.target.value)}
            />
          </label>
          <label>
            Vegetarian
            <input
              type="radio"
              name={`meal-${i}`}
              value="Vegetarian"
              onChange={(e) => handleFormChange(i, "mealOption", e.target.value)}
            />
          </label>
        </div>
        <p>
          Seat:
          <select
            onChange={(e) => {
              handleSeatSelection(i, e.target.value);
              handleFormChange(i, "seat", e.target.value);
            }}
          >
            <option value="">Select a seat</option>
            {availableSeats.map((seat) => (
              <option key={seat.number} value={seat.number}>
                {seat.number}
              </option>
            ))}
          </select>
        </p>
      </form>
    );

    if (formData[i]?.firstName && formData[i]?.lastName && formData[i]?.mealOption && formData[i]?.seat) {
      isFormComplete = true;
    }
  }

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "20px" }}>Passenger Details</h2>
      <div className="passenger-details--box">{passengers}</div>
      {isFormComplete ? (
        <Link to="/Tickets" style={{ display: "contents" }}>
          <button type="submit" onClick={handleFinishOrder} className="full-submit--btn">
            Finish Order
          </button>
        </Link>
      ) : (
        <button disabled className="full-submit--btn" style={{ opacity: "0.8" }}>
          Finish Order
        </button>
      )}
    </main>
  );
}

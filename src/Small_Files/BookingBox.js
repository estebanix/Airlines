import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

export default function BookingBox() {
  const {
    flightData,
    selectedFrom,
    setSelectedFrom,
    selectedTo,
    setSelectedTo,
    selectedDate,
    setSelectedDate,
    selectedPassengers,
    setSelectedPassengers
  } = useContext(Context);

  const [activeToggle, setActiveToggle] = useState(null);
  
  useEffect(() => {
      setSelectedTo(false) 
      setSelectedDate(false) 
      setSelectedPassengers(false)
  },[selectedFrom]);

  useEffect(() => {
    setSelectedDate(false) 
    setSelectedPassengers(false)
},[selectedTo]);

useEffect(() => { 
  setSelectedPassengers(false)
},[selectedDate]);

  const toggleOption = (option) => {
    if (activeToggle === option) {
      setActiveToggle(null);
    } else {
      setActiveToggle(option);
    }
  };

  const uniqueFromFlights = [...new Set(flightData.map((dat) => dat.from))];
  const fromFlights = uniqueFromFlights.map((dat) => (
    <p onClick={() => setSelectedFrom(dat)} key={dat}>
      {dat}
    </p>
  ));

  const uniqueToFlights = [...new Set(flightData.map((dat) => dat.to))];
  const filteredToFlights = selectedFrom
    ? uniqueToFlights.filter(
        (to) =>
          flightData.some(
            (dat) => dat.from === selectedFrom && dat.to === to
          )
      )
    : uniqueToFlights;
  const toFlights = filteredToFlights.map((dat) => (
    <p onClick={() => setSelectedTo(dat)} key={dat}>
      {dat}
    </p>
  ));

  const dates =
    selectedFrom &&
    selectedTo &&
    flightData
      .filter((dat) => dat.from === selectedFrom && dat.to === selectedTo)
      .map((dat) => {
        const [date] = dat.departure.split("T");
        return (
          <div key={dat.id}>
            <p onClick={() => setSelectedDate(dat.departure)}>{date}</p>
          </div>
        );
      });

  const formattedSelectedDate = selectedDate ? selectedDate.split("T")[0] : "";

  const passengers =
  selectedFrom &&
  selectedTo &&
  selectedDate &&
  flightData
    .filter(
      (dat) =>
        dat.from === selectedFrom &&
        dat.to === selectedTo &&
        dat.departure === selectedDate
    )
    .flatMap((dat) => {
      const availableSeats = dat.seats.filter((seat) => seat.available);
      if (availableSeats.length === 0) {
        return <p>No seats left</p>;
      } else {
        return availableSeats.map((seat, index) => (
          <p onClick={() => setSelectedPassengers(index + 1)} key={seat.id}>
            {index + 1}
          </p>
        ));
      }
    });


  return (
    <div className="bookingbox--container">
      <div
        className={`bookingbox--choose-box ${
          activeToggle === "from" && "toogle-active"
        }`}
        onClick={() => toggleOption("from")}
      >
        {!selectedFrom ? "From" : selectedFrom}
        {activeToggle === "from" && (
          <div className="dropdown-content">{fromFlights}</div>
        )}
      </div>
      <div
        className={`bookingbox--choose-box ${
          activeToggle === "to" && "toogle-active"
        }`}
        onClick={() => {
          if (!selectedFrom) {
            alert("Please select 'From' first."); 
            return;
          }
          toggleOption("to");
        }}
      >
        {!selectedTo ? "To" : selectedTo}
        {activeToggle === "to" && (
          <div className="dropdown-content">{toFlights}</div>
        )}
      </div>
      <div
        className={`bookingbox--choose-box ${
          activeToggle === "date" && "toogle-active"
        }`}
        onClick={() => {
          if (!selectedTo) {
            alert("Please select 'To' first.");
            return;
          }
          toggleOption("date");
        }}
      >
        {!selectedDate ? "Date" : formattedSelectedDate}
        {activeToggle === "date" && (
          <div className="dropdown-content">{dates}</div>
        )}
      </div>
      <div
        className={`bookingbox--choose-box ${
          activeToggle === "passenger" && "toogle-active"
        }`}
        onClick={() => {
          if (!selectedDate) {
            alert("Please select 'Date' first."); // Show alert if "From" is not selected
            return;
          }
          toggleOption("passenger");
        }}
      >
        {!selectedPassengers ? "Passengers" : selectedPassengers}
        {activeToggle === "passenger" && (
          <div className="dropdown-content">{passengers}</div>
        )}
      </div>
      <Link to="/Flights" style={{ display: "contents" }}>
        <button
          className={`search-flight--btn ${!selectedFrom || !selectedTo || !selectedDate || !selectedPassengers ? "untouchable" : ""}`}
        >
          Search Flight
        </button>
      </Link>
    </div>
  );
}

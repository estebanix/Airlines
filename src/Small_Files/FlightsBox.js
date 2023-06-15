import React, {useContext, useState} from "react";
import { Context } from "../Context/Context";
import Details from "./Details";

export default function FlightsBox(){
    const { flightData, selectedFrom, selectedTo, selectedDate, setSelectedArr, setSelectedPrice, selectedPassengers } = useContext(Context);
    const [details, setDetails] = useState(false)

    if (!flightData || !selectedFrom || !selectedTo || !selectedDate) {
        throw new Error("Required context values are not loaded.");
      }

    const filteredData = flightData.filter((dat) => 
    dat.from === selectedFrom &&
    dat.to === selectedTo &&
    dat.departure === selectedDate)

    const components = filteredData.map(dat => {
        setSelectedArr(dat.arrival)
        setSelectedPrice(selectedPassengers * dat.price)
        return <div key={dat.id} className="current-flight--box">
                    <div>
                        <p>From</p>
                        <p><span>{dat.from}</span></p>
                    </div>
                    <div>
                        <p>To</p>
                        <p><span>{dat.to}</span></p>
                    </div>
                    <p>Departure: {dat.departure}</p>
                    <p>Arrival: {dat.arrival}</p>
                    <p>Number of passenger: {selectedPassengers}</p>
                    <p>Price per passenger: {dat.price}</p>
                    <h4>Total price: {selectedPassengers * dat.price}Euro</h4>
                    <button className="confirm-flight--btn" onClick={() => setDetails(true)}>Select Flight</button>
        </div>
    })
    return(
        <main className="flights-box--container">
            {!details ? (
        <>
            <h2>Available Flights</h2>
            {components}
        </>
    ) : (
        <>
            <Details />
        </>
    )}
        </main>
    );
};
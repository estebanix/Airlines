import React, {useContext} from "react";
import { Context } from "../Context/Context";
import background from "../Images/airport_hero.jpg"
import img from "../Images/logo.jpg"

export default function TicketConfirmation(){
    const {formData, selectedFrom, selectedTo, selectedDate, selectedArr, selectedPrice} = useContext(Context);

    if (!formData || !selectedFrom || !selectedTo || !selectedDate) {
        throw new Error("Required context values are not loaded.");
      }

    const component = formData.map(dat => {
        return <div>
            <p>{dat.firstName} {dat.lastName}</p>
            <p>Meal: {dat.mealOption}</p>
            <p>Seat: {dat.seat}</p>
        </div>
    })

    const styles = {backgroundImage: `url(${background})`};

    return (
        <main className="ticket-conf--container" style={styles}>
            <h3>Prepare for adventure,</h3>
            <h2>Your tickets are ready!</h2>
            <div className="ticket-conf--box">
                <img className="ticket-logo" src={img} alt="logo" />
                <div>From {selectedFrom} to {selectedTo}</div>
                <div>{selectedDate} - {selectedArr}</div>
                <div className="conf--passengers">{component}</div>
                <h4>Total price: {selectedPrice}Euro</h4>
            </div>
        </main>
    );
};
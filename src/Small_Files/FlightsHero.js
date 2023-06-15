import React, { useContext } from "react";
import { Context } from "../Context/Context";

export default function FlightsHero(){
    const { selectedFrom, selectedTo, selectedDate } = useContext(Context);
    return(
        <main className="flights-hero--container">
            <div className="flights-hero--box">
                <h4>{selectedDate}</h4>
                <h2>Select your departure flight</h2>
                <h2>from <span>{selectedFrom}</span> to <span>{selectedTo}</span></h2>
            </div>
        </main>
    );
};
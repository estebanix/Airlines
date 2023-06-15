import React from "react";
import Nav from "../Small_Files/Nav";
import HomeHero from "../Small_Files/HomeHero";
import BookingBox from "../Small_Files/BookingBox";
import Destinations from "../Small_Files/Destinations";

export default function Home(){
    return(
        <main>
            <Nav />
            <HomeHero />
            <BookingBox />
            <Destinations />
        </main>
    );
}
import React from "react";
import background from "../Images/airport-hero2.jpg"

export default function Home_hero(){

    const styles = {backgroundImage: `url(${background})`};
    return(
        <main className="home-hero--container" style={styles}>
            <div className="home-hero--box">
                <h4>Hello</h4>
                <h3>Where do you want to explore?</h3>
            </div>
        </main>
    )
}
import React from "react";
import { Link } from 'react-router-dom';
import img from "../Images/error.svg"

export default function ErrorPage(){
    return(
            <main className="error--page">
                    <img src={img} alt="error-img"/>
                    <p>We're sorry, but we lost your data.</p>
                    <p>Please go back to the home page to start over.</p>
                    <Link to="/"><button>Go back Homepage</button></Link>
            </main>
    );
};
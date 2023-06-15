import React from "react";
import img from "../Images/logo.jpg"
import { Link } from 'react-router-dom';

export default function NavFlights(){
    return (
        <nav className="navflights--container">
            <Link to="/" style={{ display: "contents" }}>
                <div className="nav--container-logo">
                    <img src={img} alt="logo" />
                    <h4>Pro Airlines</h4>
                </div>
            </Link>
        </nav>
    );
};
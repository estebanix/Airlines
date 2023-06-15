import React from "react";
import img from "../Images/logo.jpg"

export default function Nav(){
    return(
        <nav className="nav--container">
            <div className="nav--container-logo">
                <img src={img} alt="logo" />
                <h4>Pro Airlines</h4>
            </div>
            <ul>
                <li>Book</li>
                <li>Manage</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}
import React, {useContext} from "react";
import { Context } from "../Context/Context";

export default function Destinations(){
    const { destinationData } = useContext(Context);

    const destinations_components = destinationData.map(dat => {
        return <div key={dat.id} className="destination--minibox">
                    <div className="destination--minibox-img" style={{backgroundImage: `url(${require(`../Images/${dat.img}`)})`}}></div>
                    <h4>{dat.country}</h4>
                    <h3>{dat.title}</h3>
                    <p>From {dat.price}</p>
                </div>
    })
    return(
        <div className="destinations--container">
            <h2>Popular Destinations</h2>
            <div className="destinations--box">
                {destinations_components}
            </div>
        </div>
    )
}
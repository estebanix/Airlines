import React, {createContext, useState} from "react";
import info from "../Data/Info.json"
import destinations from "../Data/Destinations.json"

export const Context = createContext()

const ContextProvider = (props) => {
    const [flightData, setFlightData] = useState(info)
    const [destinationData, setDestinationData] = useState(destinations)
    const [selectedFrom, setSelectedFrom] = useState(false)
    const [selectedTo, setSelectedTo] = useState(false)
    const [selectedDate, setSelectedDate] = useState(false)
    const [selectedArr, setSelectedArr] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState(false)
    const [selectedPassengers, setSelectedPassengers] = useState(false)
    const [isFinding, setIsFinding] = useState (false)
    const [formData, setFormData] = useState([]);

    return(
        <Context.Provider value={{
                flightData, 
                destinationData,
                selectedFrom, 
                setSelectedFrom, 
                selectedTo, 
                setSelectedTo, 
                selectedDate,
                setSelectedDate,
                selectedArr,
                setSelectedArr,
                selectedPrice,
                setSelectedPrice,
                selectedPassengers,
                setSelectedPassengers,
                isFinding,
                setIsFinding,
                formData,
                setFormData
            }}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
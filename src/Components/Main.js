import BookingForm from "./BookingForm";
import { useReducer } from "react";

export const initializeTimes = () => {
    return ["18:00","19:00","20:00","21:00","22:00"];

}

export const updateTimes =(date) => {

        return ["18:00","19:00","20:00","21:00","22:00"];
    }

const Main = () => {

    
    const[availableTimes,dispatch]=useReducer(updateTimes,initializeTimes());


    return (
        <>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}

export default Main;
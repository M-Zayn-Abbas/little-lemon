import React,{useState} from "react";
const BookingForm = () => {

    const[date,setDate]= useState("");
    const[guests,setGuests]=useState("");
    const[times,setTimes]=useState(["18:00","19:00","20:00","21:00","22:00"]);
    const[selectedTime,setSelectedTime]=useState("");
    const[occasion,setOccasion]=useState("");

    return (
        <div>
        <h1>Booking Form</h1>
        <form style={{display: 'grid', maxWidth:'200px', gap: '20px'}}>
            <div>
            <label htmlFor="date">Enter Date</label>
        <input type="date" name="date" id="date" value={date} 
  onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="time">Choose Time </label>
                <select id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    {times.map((time)=> (
                        <option  key={time} value={time} >{time}</option>
                     ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests" >Number of Guests</label>
                <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests}
                onChange={(e) => setGuests(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="occasion">Select Occasion</label>
                <select id="occasion" value={occasion}
                onChange={(e)=> setOccasion(e.target.value)}>
                    <option>Anniversery</option>
                    <option>Birthday</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Make Your reservation"/>
            </div>

        </form>
        </div>
    )

}

export default BookingForm;
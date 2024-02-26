import React,{useState} from "react";
const BookingForm = (props) => {

    const[date,setDate]= useState("");
    const[guests,setGuests]=useState("");
    const[times,setTimes]=useState("");
    const[occasion,setOccasion]=useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange= (e) =>{
        setDate(e);
        props.dispatch(e);
    }

    return (
        <div>
        <h1>Booking Form</h1>
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth:'200px', gap: '20px'}}>
            <div>
            <label htmlFor="date">Enter Date</label>
        <input type="date" name="date" id="date" value={date} 
  onChange={(e) => setDate(e.target.value)} />
            </div>


            <div>
                <label htmlFor="time">Choose Time </label>
                <select id="booking-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                    <option value="">Select a Time :</option>
                    {
                        props.availableTimes.availableTimes.map(availableTimes => {
                            return <option key={availableTimes}>{availableTimes}</option>
                        })
                    }
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
                <input aria-label="On Click" type="submit" value="Make Your reservation"/>
            </div>

        </form>
        </div>
    )

}

export default BookingForm;
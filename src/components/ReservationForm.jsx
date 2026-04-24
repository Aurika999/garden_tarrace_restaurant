import React, { useState } from "react";

const ReservationForm = () => {

    const [form, setForm] = useState({
        date: "",
        time: "",
        persons: 2
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="reservations text-center mt-5">

            <h2>Make a Reservation</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="date"
                    onChange={(e)=>setForm({...form, date:e.target.value})}
                />

                <input
                    type="time"
                    onChange={(e)=>setForm({...form, time:e.target.value})}
                />

                <select
                    onChange={(e)=>setForm({...form, persons:e.target.value})}
                >
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <button type="submit">Reserve</button>

            </form>

        </div>
    );
};

export default ReservationForm;
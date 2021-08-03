import React from 'react';

export const AppointmentForm = ({
    title,
    setTitle,
    contact,
    setContact,
    dates,
    setDates,
    time,
    setTime,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                onChange={(e) => {setTitle(e.target.value)}}
                placeholder="Enter title"
                required="required"
                value={title}
            />

            <label>Contact</label>
            <input 
                type="text"
                onChange={(e) => {setContact(e.target.value)}}
                value={contact}
                placeholder="Enter your contact"
                required="required"
            />

            <label>Dates</label>
            <input 
                type="dates"
                onChange={(e) => {setDates(e.target.value)}}
                required="required"
                value={dates}
            />

            <label>Time</label>
            <input 
                type="text"
                placeholder="What is your time"
                onChange={(e) => {setTime(e.target.value)}}
                required="required"
                value={time}
            />

            <input type="submit" value="Submit" />
        </form>
    )
}
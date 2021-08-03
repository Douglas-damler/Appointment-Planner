import React, { useState } from 'react';
import { AppointmentForm } from '../../Components/appointmentsForm/appointmentsForm';
import { TileList } from '../../Components/tileList/tileList';

export function AppointmentPage(props) {

    const [ title, setTitle ] = useState('');
    const [ contact, setContact] = useState('');
    const [ dates, setDates ] = useState('');
    const [ time, setTime ] = useState('');

    const { appointments, addAppointments} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointments(title,contact,dates,time);
        setTitle('');
        setContact('');
        setDates('');
        setTime('');
    }
    return(
        <div>
            <br />
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    title={title} setTitle={setTitle}
                    contact={contact} setContact={setContact}
                    dates={dates} setDates={setDates}
                    time={time} setTime={setTime}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList contacts={appointments} />
            </section>
        </div>
    )
}
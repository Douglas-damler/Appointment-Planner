import React from 'react';

export function Tile(props) {
    const contacts = props.contacts;
    let appointments;
    if (contacts.title) {
        appointments =  (<div className="tile-container">
        <p className="tile-title">{contacts.title}</p>
        <p className="tile"><span className="tileDescription">Contacts: </span> {contacts.contact}</p>
        <p className="tile"><span className="tileDescription">Dates: </span>{contacts.dates}</p>
        <p className="tile"><span className="tileDescription">Time: </span>{contacts.time}</p>
        </div>);
    }

    else {
        appointments = (
            <div>
                <p className="tile-title">{contacts.name}</p>
                <p className="tile"><span className="tileDescription">Phone: </span> {contacts.phone}</p>
                <p className="tile"><span className="tileDescription">Email: </span>{contacts.email}</p>
            </div>
        )
    }

    return appointments;
}
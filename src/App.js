import React, { useState } from 'react';
import './App.css';
import { AppointmentPage } from './Containers/appointmentsPage/appointmentsPage';
import { ContactsPage } from './Containers/contactsPage/contactPage';
import { Switch, Route, Redirect, NavLink, BrowserRouter as Router} from 'react-router-dom';



export default function App() {

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContacts = (name, phone, email) => {
    setContacts((prev) => [
      ...prev,
      {
        name: name,
        phone: phone,
        email: email
      },
    ]);
    console.log(contacts)
  }

  const addAppointments = (title, contact, date, time) => {
    setAppointments((prev) => ([
      ...prev,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ]));
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments"
  };


  return (
    <>
      <nav>
        <Router>

          <NavLink to={ROUTES.CONTACTS} activeClassName="active">Contacts</NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">Appointments</NavLink>

          <main>
          <Switch>

            <Route path={ROUTES.CONTACTS}>
              <ContactsPage contacts={contacts}  addContacts={addContacts} />
            </Route>

            <Route path={ROUTES.APPOINTMENTS}>
                <AppointmentPage addAppointments={addAppointments} appointments={appointments} />
            </Route>
          
          </Switch>

          </main>
        </Router>
        
      </nav>
    </>

  );
}


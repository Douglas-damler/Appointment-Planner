import React, { useState } from 'react';
import { ContactForm } from '../../Components/contactForm/contactForm';
import { TileList } from '../../Components/tileList/tileList';

export function ContactsPage(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');

    const { contacts, addContacts } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        addContacts(name, phone, email);
        setName('');
        setPhone('');
        setEmail('');
    }


    
    return (
        <div>
            <br />
            <section>
                <h2>Add Contacts</h2>
                <ContactForm 
                    name={name} setName={setName} 
                    phone={phone} setPhone={setPhone} 
                    email={email} setEmail={setEmail} 
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={contacts} />
            </section>
        </div>
    )
}
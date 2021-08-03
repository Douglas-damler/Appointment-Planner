import React from 'react';

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text"
                placeholder="Enter the name"
                required="required"
                onChange={(e) => {setName(e.target.value)}}
                value={name}
            />

            <label>Phone</label>
            <input
                type="tel"
                placeholder="Enter phone"
                required="required"
                onChange={(e) => {setPhone(e.target.value)}} 
                value={phone}
                
            />

            <label>Email</label>
            <input
                type="email"
                placeholder="Enter the email"
                required="required"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email} 
            />

            <input type="submit" value="submit" />
    
        </form>
    );
};
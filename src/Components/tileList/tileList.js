import React from 'react';
import { Tile } from '../tile/tile';

export function TileList(props) {
   const contacts = props.contacts;
    return (
        <ul>
           {contacts.map((contact, index) => (
               <Tile contacts={contact} key={index} />
           ))}
        </ul>
    )
} 
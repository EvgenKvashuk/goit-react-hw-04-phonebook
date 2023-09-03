import React from "react";

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name} - {number}
        </span>
        <button onClick={() => onDeleteContact(id)}>Dlete</button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
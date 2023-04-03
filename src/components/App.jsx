import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './FilterInput/Filter';
import Form from './Form/Form';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    return storageContacts ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactSubmit = ({ name, phone }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact already exists');
    } else {
      const newContact = { name, phone, id: nanoid(5) };
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <Form onSubmit={handleContactSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList
        contacts={!filter.length ? contacts : filteredContacts}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;

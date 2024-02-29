
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sweta Karn', email: 'sweta24@gmail.com', phone: '9825694759' },
    { id: 2, name: 'Mimansha ojha', email: 'mimansha1@gmail.com', phone: '9844466310' },
  ]);

  // Add a new contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Delete a contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import LocalStorageInitializer from './LocalStorageInitializer';
import { addContact, removeContact } from '../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <div className="book_section">
      <LocalStorageInitializer />
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <div className="contact_form">
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter />
        <ContactList contacts={contacts} onDelete={handleDeleteContact} />
      </div>
    </div>
  );
};

export default App;

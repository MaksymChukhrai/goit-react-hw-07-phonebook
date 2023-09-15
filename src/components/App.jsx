import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import {
  fetchContacts,
  addContactAsync,
  deleteContactAsync,
} from '../services/api'; // Импортируем асинхронные функции из api.js

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    // Загрузка контактов из бекенда при монтировании компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = async contact => {
    try {
      await dispatch(addContactAsync(contact));
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContactAsync(contactId));
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  return (
    <div className="book_section">
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

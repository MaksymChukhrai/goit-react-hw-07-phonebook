import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { fetchContactsApi, addContactApi, deleteContactApi } from '../services/api'; // Импортируем асинхронные функции из api.js

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    // Загрузка контактов из бекенда при монтировании компонента
    dispatch(fetchContactsApi());
  }, [dispatch]);

  const handleAddContact = async contact => {
    // Добавление контакта в бекенд и обновление Redux-состояния
    try {
      const addedContact = await addContactApi(contact);
      dispatch(addContactApi.fulfilled(addedContact));
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  const handleDeleteContact = async contactId => {
    // Удаление контакта из бекенда и обновление Redux-состояния
    try {
      await deleteContactApi(contactId);
      dispatch(deleteContactApi.fulfilled(contactId));
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


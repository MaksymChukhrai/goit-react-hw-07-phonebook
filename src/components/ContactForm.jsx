import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from '../services/api'; // Импортируем экшен для добавления контакта
import { addContact } from '../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading); // Получаем isLoading из Redux Store

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    try {
      const response = await dispatch(addContactAsync({ name, number }));

      if (addContactAsync.fulfilled.match(response)) {
        // response.payload содержит добавленный контакт
        const newContact = response.payload;

        dispatch(addContact(newContact));
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>Name:</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isLoading} // Блокируем поля ввода во время загрузки
        />
      </label>
      <label>
        <h2>Number:</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          disabled={isLoading} // Блокируем поля ввода во время загрузки
        />
      </label>
      <button className="number-btn" type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}{' '}
        {/* Изменяем надпись на кнопке в зависимости от состояния isLoading */}
      </button>
    </form>
  );
};

export default ContactForm;

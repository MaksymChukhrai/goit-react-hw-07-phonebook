import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactApi } from '../services/api'; // Импортируем асинхронную функцию addContactApi

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading); // Получаем состояние isLoading из Redux
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    // Отправка запроса на добавление контакта в бекенд
    try {
      const newContact = await addContactApi({ name, number });
      dispatch(addContactApi.fulfilled(newContact));
      setName('');
      setNumber('');
    } catch (error) {
      console.error('Failed to add contact:', error);
     
    }
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
        {isLoading ? 'Adding...' : 'Add contact'} {/* Изменяем надпись на кнопке в зависимости от состояния isLoading */}
      </button>
    </form>
  );
};

export default ContactForm;


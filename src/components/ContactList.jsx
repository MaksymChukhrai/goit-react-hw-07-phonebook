import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice'; // Импорт экшена removeContact

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter); // Отримання значення фільтру
  const dispatch = useDispatch();

  // Фільтруємо контакти на основі фільтру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    // Используем dispatch для вызова экшена removeContact с передачей id контакта
    dispatch(removeContact(contactId));
  };
  return (
    <ul className="contact_list">
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button className="delete-btn" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

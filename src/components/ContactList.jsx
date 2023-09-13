import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContactApi } from '../services/api'; // Обновленный импорт

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter);


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (contactId) => { // Обновленный обработчик с async
    try {
      await deleteContactApi(contactId); // Используем новый экшен
    } catch (error) {
      console.error('Failed to delete contact', error);
    }
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


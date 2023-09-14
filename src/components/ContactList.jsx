import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync } from '../services/api';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    // Вызываем асинхронный экшен для удаления контакта
    dispatch(deleteContactAsync(contactId));
  };

  return (
    <ul className="contact_list">
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.id}: {contact.name}: {contact.phone}
          <button className="delete-btn" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


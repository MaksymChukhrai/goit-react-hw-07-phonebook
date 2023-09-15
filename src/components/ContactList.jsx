import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync } from '../services/api';
import { selectContacts } from '../redux/contactsSlice';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  useEffect(() => {}, [contacts]); // Зависимость от состояния контактов

  return (
    <ul className="contact_list">
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.id}: {contact.name}: {contact.number}
          <button
            className="delete-btn"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

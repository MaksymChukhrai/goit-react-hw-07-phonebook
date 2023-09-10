import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useLocalStorage from '../utils/useLocalStorage';

const LocalStorageInitializer = () => {
  const [storedContacts, setStoredContacts] = useLocalStorage('contacts', []);
  const contacts = useSelector(state => state.contacts.list);

  useEffect(() => {
    // Сравниваем storedContacts и текущий список контактов
    if (JSON.stringify(storedContacts) !== JSON.stringify(contacts)) {
      setStoredContacts(contacts);
    }
  }, [contacts, storedContacts, setStoredContacts]);

  return null;
};

export default LocalStorageInitializer;

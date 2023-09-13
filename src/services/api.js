import axios from 'axios';

const BASE_URL = 'https://64fdde91596493f7af7eb2c9.mockapi.io/api';

export const fetchContactsApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const addContactApi = async (newContact) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, newContact, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add contact');
  }
};

export const deleteContactApi = async (deletedContactId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/contacts/${deletedContactId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};

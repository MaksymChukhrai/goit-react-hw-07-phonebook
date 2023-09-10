import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialContacts = [
  { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
  { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
  { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: initialContacts,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    removeContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterContacts: (state, action) => {
      state.list = state.list.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    updateContact: (state, action) => {
      const updatedContact = action.payload;
      const index = state.list.findIndex(
        contact => contact.id === updatedContact.id
      );
      if (index !== -1) {
        state.list[index] = updatedContact;
      }
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact, setFilter, updateContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;

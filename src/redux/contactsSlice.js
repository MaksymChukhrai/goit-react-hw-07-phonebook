import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContactAsync } from '../services/api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      state.items.push(newContact);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactAsync.pending, state => {
        // Обработка начала удаления контакта (если нужно)
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        // Обработка успешного удаления контакта
        const contactId = action.payload;
        state.items = state.items.filter(contact => contact.id !== contactId);
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        // Обработка ошибки при удалении контакта (если нужно)
      });
  },
});

export const { addContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;

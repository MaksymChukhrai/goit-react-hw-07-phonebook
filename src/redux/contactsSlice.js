import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from '../services/api';


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContactsApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContactApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContactApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContactApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContactApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContactApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});



export default contactsSlice.reducer;
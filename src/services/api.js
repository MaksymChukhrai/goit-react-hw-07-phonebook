import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64fdde91596493f7af7eb2c9.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);

      return contactId; // Возвращаем идентификатор удаленного контакта
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactAsync = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      // console.log("Response from addContactAsync:", response.data);
      return response.data; // Возвращаем добавленный контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
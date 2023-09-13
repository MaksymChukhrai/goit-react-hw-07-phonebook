import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts } from "../services/api";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },

    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
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
        });
    },
  });

  export const { addContact } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;
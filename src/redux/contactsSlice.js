import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        return [...state, action.payload];
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selectors
export const selectContacts = state => state.contacts;

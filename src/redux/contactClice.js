import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [
      { id: 'id-1', name: 'Rosie', number: '4591256' },
      { id: 'id-2', name: 'Hermione', number: '4438912' },
      { id: 'id-3', name: 'Eden', number: '6451779' },
      { id: 'id-4', name: 'Annie', number: '2279126' },
    ],
  },
  reducers: {
    addContact(state, action) {
      // state.list = [...state.list, action.payload];
      state.list.push(action.payload);
    },

    deleteContact(state, action) {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

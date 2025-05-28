import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {},
    deleteContact: (state, action) => {},
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

// state.items.push(action.payload)

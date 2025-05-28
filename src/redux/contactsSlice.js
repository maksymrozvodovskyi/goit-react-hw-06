import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: () => {},
    deleteContact: () => {},
  },
});

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// export default function contactSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case "contacts/addContact":
//     case "contacts/deleteContact":
//     default:
//       return state;
//   }
// }

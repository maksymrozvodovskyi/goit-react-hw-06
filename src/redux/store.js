import { configureStore, createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/addContact":
      return;
    case "contacts/deleteContact":
      return;
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: rootReducer,
});

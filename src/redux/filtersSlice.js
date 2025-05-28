import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("filters/changeFilter");

const initialState = {
  name: "",
};

export default function filterSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/changeFilter":
    default:
      return state;
  }
}

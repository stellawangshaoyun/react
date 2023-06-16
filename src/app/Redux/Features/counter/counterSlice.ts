"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  make: string;
  colour: string;
  code: string;
}

const initialState: CounterState = {
  make: "AUDI",
  colour: "BLUE",
  code: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateMake: (state, action) => {
      state.make = action.payload;
    },
    updateColour: (state, action) => {
      state.colour = action.payload;
    },
    updateCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { updateMake, updateColour, updateCode } = counterSlice.actions;

export default counterSlice.reducer;

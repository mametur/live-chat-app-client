import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

// Initial state
const initialState: CounterState = {
  value: 0,
};

// Creating a slice
//createSlice → For creating reducers and actions easily.
const counterSlice = createSlice({
  name: "counter", // Slice name
  initialState, // Initial state
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
// Actions let components trigger state changes.
// Reducer is used by Redux to manage the store.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

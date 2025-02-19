import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // // Add counter slice to store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
Why Use Redux Toolkit Instead of Regular Redux?
Less Boilerplate: No need to manually write action creators or reducers separately.
Built-in Immer: Allows immutable state updates without extra complexity.
Better Performance: Optimized for modern React patterns.
 */

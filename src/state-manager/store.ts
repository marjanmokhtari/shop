import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";
import themeReducer from "./reducer/theme";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

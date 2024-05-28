import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";
import themeReducer from "./reducer/theme";
import cartReducer from "./reducer/cart";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

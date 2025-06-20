import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import ticketsSlice from "./slices/ticketSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsSlice,
  },
  devTools: true,
});

export default store;
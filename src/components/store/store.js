import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import ticketsReducer from "./slices/ticketSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducer,
  },
  devTools: true,
});

export default store;

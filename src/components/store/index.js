import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import ticketsReducer from "./slices/ticketsReducer";
import sortReducer from './slices/sortSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducer,
    sort: sortReducer
  },
  devTools: true,
});

export default store;
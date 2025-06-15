import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import sortReducer from './slices/sortSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
  },
});

export default store;
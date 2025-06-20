import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: 'cheapest',
  all: true,
  zero: true,
  one: true,
  two: true,
  three: true,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAll(state) {
      const newVal = !state.all;
      state.all = newVal;
      state.zero = newVal;
      state.one = newVal;
      state.two = newVal;
      state.three = newVal;
    },
    toggleFilter(state, action) {
      const key = action.payload;
      state[key] = !state[key];

      const allChecked = state.zero && state.one && state.two && state.three;
      const allUnchecked = !state.zero && !state.one && !state.two && !state.three;

      if (allChecked) state.all = true;
      else if (allUnchecked) state.all = false;
      else state.all = false;
    },
  },
});

export const { toggleAll, toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
  sortType: 'cheapest',
  items: [],
  displayedItems: [],
  loading: false,
  error: null,
  offset: 5,
},
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.displayedItems = action.payload.slice(0, state.offset);
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loadMore(state, action) {
      const step = action.payload ?? 5;
      const limit = state.items.length;
      const newOffset = Math.min(state.offset + step, limit);
      state.offset = newOffset;
      state.displayedItems = state.items.slice(0, newOffset);
    },
    sort(state, action) {
      state.sortType = action.payload;
    },
    setDisplayedItems(state, action) {
      state.displayedItems = action.payload;
    },
    setSortedItems(state, action) {
      state.items = action.payload;
    }
  },
});

export const { fetchStart, fetchSuccess, fetchError, loadMore, sort, setDisplayedItems, setSortedItems } = ticketsSlice.actions;
export default ticketsSlice.reducer;

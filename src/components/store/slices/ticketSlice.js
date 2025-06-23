import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    sortType: "cheapest",
    allItems: [],
    filteredItems: [],
    displayedItems: [],
    loading: false,
    error: false,
    offset: 5,
  },
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.items = action.payload;
      state.displayedItems = action.payload.sort((a, b) => a.price - b.price);
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loadMore(state, action) {
      const step = action.payload ?? 5;
      const limit = state.displayedItems.length;
      const newOffset = Math.min(state.offset + step, limit);
      state.offset = newOffset;
    },
    toggleError(state, action) {
      state.loading = false;
      if (action.type === "setError") {
        state.error = true;
      } else {
        state.error = false;
      }
    },
    sort(state, action) {
      state.sortType = action.payload;
    },
    setDisplayedItems(state, action) {
      state.displayedItems = action.payload;
    },
    setSortedItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  loadMore,
  sort,
  setDisplayedItems,
  setSortedItems,
  toggleError,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;

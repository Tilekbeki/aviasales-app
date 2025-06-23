import { setDisplayedItems } from "../store/slices/ticketSlice";

export const applyFiltersAndSort = () => (dispatch, getState) => {
  const { tickets, filters } = getState();
  const { items, error, loading } = tickets;
  if (error || loading) {
    console.log("подстраховка от дурака");
    return;
  }
  const isAnyFilterSelected =
    filters.zero || filters.one || filters.two || filters.three || filters.all;
  console.log(isAnyFilterSelected);
  const filtered = items.filter((ticket) => {
    const stops =
      ticket.segments[0].stops.length + ticket.segments[1].stops.length;

    if (!isAnyFilterSelected) {
      return true;
    }

    return (
      filters.all ||
      (filters.zero && stops === 0) ||
      (filters.one && stops === 1) ||
      (filters.two && stops === 2) ||
      (filters.three && stops === 3)
    );
  });
  console.log(filtered);
  let filteredByTabs;

  if (tickets.sortType === "cheapest") {
    filteredByTabs = filtered.sort((a, b) => a.price - b.price);
  }
  if (tickets.sortType === "fastest") {
    console.log("быстрые");
    filteredByTabs = filtered.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration),
    );
  }

  if (isAnyFilterSelected) {
    dispatch(setDisplayedItems(filteredByTabs));
  } else {
    dispatch(setDisplayedItems(filteredByTabs));
  }
};

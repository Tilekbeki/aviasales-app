import { fetchStart, fetchSuccess, fetchError } from '../slices/ticketSlice'; // 👈 импорт действий
// НЕ НУЖЕН импорт reducer здесь

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const responseForId = await fetch('https://aviasales-test-api.kata.academy/search');
      const id = await responseForId.json();

      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`);
      const data = await response.json();

      console.log(data.tickets);
      dispatch(fetchSuccess(data.tickets));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

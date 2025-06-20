export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch({ type: 'tickets/fetchStart' });

    try {
      const responeForId = await fetch('https://aviasales-test-api.kata.academy/search');
      const id = await responeForId.json();
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`);
      const data = await response.json();
      console.log(data.tickets)
      dispatch({ type: 'tickets/fetchSuccess', payload: data.tickets });
    } catch (error) {
      dispatch({ type: 'tickets/fetchError', payload: error.message });
    }
  };
};
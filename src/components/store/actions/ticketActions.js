export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch({ type: 'tickets/fetchStart' });

    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/tickets?searchId=c4902c4510b72eb1329c4d9b52cbd1ef');
      const data = await response.json();
      console.log(data.tickets)
      dispatch({ type: 'tickets/fetchSuccess', payload: data.tickets });
    } catch (error) {
      dispatch({ type: 'tickets/fetchError', payload: error.message });
    }
  };
};
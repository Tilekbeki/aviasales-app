import { fetchStart, fetchSuccess, fetchError } from "../slices/ticketSlice";

const getSearchId = async () => {
  const response = await fetch(
    "https://aviasales-test-api.kata.academy/search",
  );
  if (!response.ok) {
    throw new Error(`Не удалось получить searchId: ${response.status}`);
  }
  const data = await response.json();
  return data.searchId;
};

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const searchId = await getSearchId();

      let allTickets = [];
      let stop = false;

      while (!stop) {
        const res = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        );

        if (!res.ok) {
          if (res.status === 500) {
            // повторяем, если 500 ошибка
            continue;
          } else {
            throw new Error(`Ошибка загрузки: ${res.status}`);
          }
        }

        const data = await res.json();

        allTickets = [...allTickets, ...data.tickets];
        stop = data.stop;
      }

      dispatch(fetchSuccess(allTickets));
    } catch (error) {
      console.error("Ошибка получения билетов:", error);
      dispatch(fetchError(error.message));
    }
  };
};

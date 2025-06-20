const initialState = {
  sortType: 'cheapest',
  items: [],
  displayedItems: [],
  loading: false,
  error: null,
  offset: 5,          // сколько билетов показываем сейчас
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'tickets/fetchStart':
      return { ...state, loading: true, error: null };

    case 'tickets/fetchSuccess':
      return {
        ...state,
        loading: false,
        items: action.payload,
        displayedItems: action.payload.slice(0, state.offset),
      };

    case 'tickets/fetchError':
      return { ...state, loading: false, error: action.payload };

    /** ⬇️ добавляем новый кейс */
    case 'tickets/loadMore': {
      const step   = action.payload ?? 5;                    // сколько прибавляем
      const limit  = state.items.length;                     // всего билетов
      const offset = Math.min(state.offset + step, limit);   // защищаем от выхода за предел
      console.log('')
      return {
        ...state,
        offset,
        displayedItems: state.items.slice(0, offset),
      };
    }

    default:
      return state;
  }
}

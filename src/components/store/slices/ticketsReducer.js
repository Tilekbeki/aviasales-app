const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'tickets/fetchStart':
      return { ...state, loading: true, error: null };
    case 'tickets/fetchSuccess':
      return { ...state, loading: false, items: action.payload };
    case 'tickets/fetchError':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

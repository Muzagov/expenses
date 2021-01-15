const initialState = {
  categories: [],
  history: [],
  sum: "",
  comment: "",
  opened: false,
};

export function categories(state = initialState, action) {
  switch (action.type) {
    case "add/category":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case "toggle/modal":
      return {
        ...state,
        opened: !state.opened,
      };

    case "add/consumption":
      return {
        ...state,
        history: [...state.history, action.payload],
      };

    case "get/sum":
      return {
        ...state,
        sum: action.payload,
      };

    case "get/comment":
      return {
        ...state,
        comment: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
      break;
    case "DECREMENT":
      return { number: state.number - 1 };
      break;
    default:
      return state;
      break;
  }
};

export default counterReducer;

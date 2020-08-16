const initialState = {
  inputValue: "",
};

const question1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, { inputValue: action.text });
      break;
    default:
      return state;
  }
};

export default question1Reducer;

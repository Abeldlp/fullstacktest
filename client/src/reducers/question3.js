const initialState = {
  inputValue: "",
};

const question3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTRY_CHANGE":
      return Object.assign({}, state, { inputValue: action.text });
      break;
    default:
      return state;
  }
};

export default question3Reducer;

const initialState = {
  countryName: "Pizza",
  shown: false,
};

const question1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    default:
      return state;
  }
};

export default question1Reducer;

const initialState = {
  logged: false,
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { logged: !state.logged };
      break;
    default:
      return state;
      break;
  }
};

export default loggedReducer;

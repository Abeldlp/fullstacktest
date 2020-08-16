export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGGED_IN",
  };
};

export const onInputChange = (event) => {
  return {
    type: "CHANGE_NAME",
    payload: event,
  };
};

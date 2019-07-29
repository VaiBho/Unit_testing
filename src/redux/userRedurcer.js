const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_FULFILLED":
      console.log(action);
      return {
        users: action.payload.data
      };
    default:
      return state;
  }
};

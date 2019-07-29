import axios from "axios";

export const getUsers = () => dispatch => {
  console.log("yep");
  dispatch({
    type: "GET_USERS_FULFILLED",
    payload: axios.get("https://jsonplaceholder.typicode.com/users")
  });
};

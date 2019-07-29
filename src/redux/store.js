import userReducer from "./userRedurcer";
import { createStore } from "redux";

const store = createStore(userReducer);

export default store;

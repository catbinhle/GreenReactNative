import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
  reducer: {},
})

export default store

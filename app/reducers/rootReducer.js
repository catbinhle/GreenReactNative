// import {combineReducers} from "redux";
import { appReducer } from "./childReducer/appReducer";

// export default combineReducers({
//   app: appReducer,
// })
 const rootReducer = {
  app: appReducer,
}


export default rootReducer

import { combineReducers } from "redux"
import appReducer from "./AppReducer"
import homeReducer from "./HomeReducer"

//***** Combine các reducers, ở đây có 2 reducer cho App và Home, 
//***** nếu muốn tạo thêm các reducer khác thì cứ việc add vào thêm
const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer
})
  
export default rootReducer
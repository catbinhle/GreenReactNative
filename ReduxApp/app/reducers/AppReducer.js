import {APP_LOGIN, APP_LOGIN_RESPONSE, APP_LOGOUT} from '../define/ActionTypes'

//***** Tạo state với 2 object là account và userInfo
const initialState = {
    account: {
    },
    userInfo: {
    },
}

//***** Dành cho quản lý state cho toàn app (có phần login)
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOGIN:
            return { ...state, account: action.payload }
        case APP_LOGIN_RESPONSE:
            return { ...state, userInfo: action.payload.data }
        case APP_LOGOUT:
            return initialState
        default:
          return state
      }
}
  
export default appReducer
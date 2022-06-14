import { APP_LOGIN_RESPONSE } from "../../define/actionTypes";

const initialState = {
  account: {
  },
  userInfo: {
  },
}

export const appReducer = (state= initialState, action) => {
  switch (action.type) {
    case APP_LOGIN_RESPONSE:
      return {...state, userInfo: action.payload.data}
    default:
      return state
  }
}

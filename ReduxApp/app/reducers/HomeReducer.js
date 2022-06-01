import { HOME_GET_LIST } from '../define/ActionTypes'

//***** Tạo state cho Home vs array homeList
const initialState = {
    homeList: []
}

//***** Dành cho quản lý state cho trang Home 
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET_LIST:
            return { ...state, homeList: action.payload }
        default:
          return state
      }
}
  
export default homeReducer
// import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux' //// ***** Nếu dùng createStore (deprecated), lưu ý: comment @reduxjs/toolkit lại
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

// const store = configureStore({
//   reducer: rootReducer,
// })

// export default store

// ***** Nếu dùng createStore (deprecated), lưu ý: comment phần store ở trên
const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

export default configureStore


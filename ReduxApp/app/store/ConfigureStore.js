import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux' //// ***** Nếu dùng createStore (deprecated), lưu ý: comment @reduxjs/toolkit lại
import rootReducer from '../reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store

//// ***** Nếu dùng createStore (deprecated), lưu ý: comment phần store ở trên
// const configureStore = (initialState) => {
//   return createStore(rootReducer, initialState)
// }

// export default configureStore


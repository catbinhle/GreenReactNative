// import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux' //// ***** Nếu dùng createStore (deprecated), lưu ý: comment @reduxjs/toolkit lại
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import appSaga from '../middleware/appSaga'

// const store = configureStore({
//   reducer: rootReducer,
// })

// export default store

// ***** Nếu dùng createStore (deprecated), lưu ý: comment phần store ở trên
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const configureStore = (initialState) => {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(appSaga)
  return store
}

export default configureStore


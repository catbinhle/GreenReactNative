// import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux' //// ***** Nếu dùng createStore (deprecated), lưu ý: comment @reduxjs/toolkit lại
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import appSaga from '../middleware/appSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const store = configureStore({
//   reducer: rootReducer,
// })

// export default store

// ***** Nếu dùng createStore (deprecated), lưu ý: comment phần store ở trên
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["app", "home"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const configureStore = (initialState) => {
  const store = createStore(
    persistedReducer, 
    initialState, 
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(appSaga)
  const persister = persistStore(store)
  return {store, persister}
}

export default configureStore


import {APP_LOGIN, APP_LOGOUT, APP_LOGIN_RESPONSE, HOME_GET_LIST} from '../define/ActionTypes'

// LOGIN - Define các sự kiện ở trang Login và chung chung của APP
export const appLogin = (param) => (
    {
        type: APP_LOGIN,
        payload: param
    }
)

export const appLoginRes = (res) => (
    {
        type: APP_LOGIN_RESPONSE,
        payload: res
    }
)

export const appLogout = () => (
    {
        type: APP_LOGOUT,
    }
)

// HOME - Define các sự kiện ở trang Home
export const getHomeList = (res) => (
    {
        type: HOME_GET_LIST,
        payload: res
    }
)

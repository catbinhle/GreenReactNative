import {APP_LOGOUT, APP_LOGIN_RESPONSE, APP_LOGIN} from '../define/ActionTypes'
import {api} from '../Servers/API'

// LOGIN - Define các sự kiện ở trang Login và chung chung của APP

// ***** Hàm appLogin này để dùng cho redux-thunk, giữ lại để thấy sự khác biệt
// export const appLogin = (param) => (
//     api({
//         endPoint: 'signin',
//         method: 'POST',
//         param: {
//             client_data:{
//                 username: param.username,
//                 password: param.password
//             }
//         },
//         isLogin: true,
//         action: (json) => appLoginRes(json)
//     })
// )

// ***** Hàm appLogin này để dùng cho redux-saga, nó đã đồng bộ cùng 1 format chung chung ở Action
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
//***** Lưu ý: chúng ta có thể viết theo dạng function như sau:
// export function appLoginRes(res) {
//     return {
//         type: APP_LOGIN_RESPONSE,
//         payload: res
//     }
// }

export const appLogout = () => (
    {
        type: APP_LOGOUT,
    }
)

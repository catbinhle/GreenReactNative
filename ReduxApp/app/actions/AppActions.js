import {APP_LOGOUT, APP_LOGIN_RESPONSE} from '../define/ActionTypes'
import {api} from '../Servers/API'

// LOGIN - Define các sự kiện ở trang Login và chung chung của APP
export const appLogin = (param) => (
    api({
        endPoint: 'signin',
        method: 'POST',
        param: {
            client_data:{
                username: param.username,
                password: param.password
            }
        },
        isLogin: true,
        action: (json) => appLoginRes(json)
    })
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

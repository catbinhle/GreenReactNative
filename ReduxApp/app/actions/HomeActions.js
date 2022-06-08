import {HOME_GET_LIST} from '../define/ActionTypes'
import {api} from '../Servers/API'

// HOME - Define các sự kiện ở trang Home

// ***** Hàm getHomeList này để dùng cho redux-thunk, các bạn có thể dựa trên Login để request API cho HomeList bằng cách dùng redux-saga
// export const getHomeList = () => (
//     api({
//         endPoint: 'post',
//         method: 'POST',
//         param: {},
//         action: (json) => getHomeListRes(json?.data)
//     })
// )

export const getHomeListRes = (res) => (
    {
        type: HOME_GET_LIST,
        payload: res
    }
)
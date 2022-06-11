import {HOME_GET_LIST, HOME_GET_LIST_RES_SUCCESS, HOME_GET_LIST_RES_FAIL} from '../define/ActionTypes'

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

export const getHomeList = () => (
    {
        type: HOME_GET_LIST,
    }
)

export const getHomeListResSuccess = (res) => (
    {
        type: HOME_GET_LIST_RES_SUCCESS,
        payload: res
    }
)

export const getHomeListResFail = (res) => (
    {
        type: HOME_GET_LIST_RES_FAIL,
        payload: res
    }
)
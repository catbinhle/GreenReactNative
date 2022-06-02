import {HOME_GET_LIST} from '../define/ActionTypes'
import {api} from '../Servers/API'

// HOME - Define các sự kiện ở trang Home
export const getHomeList = () => (
    api({
        endPoint: 'post',
        method: 'POST',
        param: {},
        action: (json) => getHomeListRes(json?.data)
    })
)

export const getHomeListRes = (res) => (
    {
        type: HOME_GET_LIST,
        payload: res
    }
)
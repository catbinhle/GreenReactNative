import { call, put, takeEvery, takeLatest, select, fork, all, delay } from 'redux-saga/effects'
import {api} from '../Servers/API'
import {APP_LOGIN, APP_LOGIN_RESPONSE, HOME_GET_LIST, HOME_GET_LIST_RES_SUCCESS, HOME_GET_LIST_RES_FAIL} from '../define/ActionTypes'

function* appLogin(action) {
    try {
        const response = yield call(
            api,
            {
                endPoint: 'signin', 
                method: 'POST', 
                param: {
                    client_data:{
                        username: action.payload.username,
                        password: action.payload.password
                    }
                },
                isLogin: true
            }
        )
        // ***** Bài tập tới đây, response trả về, chúng ta sẽ phân ra thành SUCCESS và FAIL
        // ***** Trường hợp này là SUCCESS
        yield put({type: APP_LOGIN_RESPONSE, payload: response})
    } catch (e) {
        // ***** Block này dùng để xử lý lỗi xảy ra khi request lên server. 
        // ***** Vì ở bài tập trước, chúng ta xử lý chung chung APP_LOGIN_RESPONSE
        // ***** Bài tập tới đây, response trả về, chúng ta sẽ phân ra thành SUCCESS và FAIL
        // ***** Trường hợp này là FAIL, khi đó chúng ta sẽ xử lý lại reducer cho state fail, chúng ta sẽ thêm field faild ở state của reducer.
        console.log(e)
    //    yield put({type: APP_LOGIN_RESPONSE, payload: 'Request error!'})
    }
}

// ***** Nếu như muốn viết thêm nhiều request API thì cứ viết tiếp dưới đây, như getHomeList
function* getHomeList() {
    try {
        const {app} = yield select()
        const response = yield call(
            api,
            {
                endPoint: 'post', 
                method: 'POST', 
                param: {},
                token: app.userInfo?.accessToken
            }
        )
        yield put({type: HOME_GET_LIST_RES_SUCCESS, payload: response?.data})
    } catch (e) {
        console.log(e)
    //    yield put({type: APP_LOGIN_RESPONSE, payload: 'Request error!'})
    }
}

function* appSaga() {
    // ***** Thử dùng với takeLastest để xem sự khác biệt
    yield takeEvery(APP_LOGIN, appLogin)
    yield takeEvery(HOME_GET_LIST, getHomeList)
}

export default appSaga
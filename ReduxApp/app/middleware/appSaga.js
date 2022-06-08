import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {api} from '../Servers/API'
import {APP_LOGIN, APP_LOGIN_RESPONSE} from '../define/ActionTypes'

function* appLogin(action) {
    try {
        const response = yield call(
            api,
            'signin',
            'POST',
            {
                client_data:{
                    username: action.payload.username,
                    password: action.payload.password
                }
            },
            true
        )
        // ***** Bài tập tới đây, response trả về, chúng ta sẽ phân ra thành SUCCESS và FAIL
        // ***** Trường hợp này là SUCCESS
        yield put({type: APP_LOGIN_RESPONSE, payload: response})
    } catch (e) {
        // ***** Block này dùng để xử lý lỗi xảy ra khi request lên server. 
        // ***** Vì ở bài tập trước, chúng ta xử lý chung chung APP_LOGIN_RESPONSE
        // ***** Bài tập tới đây, response trả về, chúng ta sẽ phân ra thành SUCCESS và FAIL
        // ***** Trường hợp này là FAIL, khi đó chúng ta sẽ xử lý lại reducer cho state fail, chúng ta sẽ thêm field faild ở state của reducer.
        console.log('Request error!')
    //    yield put({type: APP_LOGIN_RESPONSE, payload: 'Request error!'})
    }
}

// ***** Nếu như muốn viết thêm nhiều request API thì cứ viết tiếp dưới đây, như getHomeList

function* appSaga() {
    // ***** Thử dùng với takeLastest để xem sự khác biệt
    yield takeEvery(APP_LOGIN, appLogin)
}

export default appSaga
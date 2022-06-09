// ***** Function này dành cho redux-thunk, giữ lại để so sánh với redux-saga
// export const api = ({endPoint, method, param, isLogin = false, action}) => (
//     async (dispatch, getState) => {
//         const {userInfo} = getState().app
//         try {
//           const response = await fetch(
//             'http://i-web.com.vn/api/v1/auth/' + endPoint,
//             {
//                 method: method,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
//                 },
//                 body: JSON.stringify(param),
//             }
//           );
//           const json = await response.json()
//           console.log('response API: ', json)
//           await dispatch(action(json))
//         } catch (error) {
//           console.error(error)
//         }
//     }
// )

// ***** Function này dành cho redux-saga
export const api = async({endPoint, method, param, isLogin = false}) => {
  try {
    const response = await fetch(
      'http://i-web.com.vn/api/v1/auth/' + endPoint,
      {
          method: method,
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
          },
          body: JSON.stringify(param),
      }
    );
    const json = await response.json()
    console.log('response API: ', json)
    return json
  } catch (error) {
    console.error(error)
    return error
  }
}
  
import React, { useEffect, useState } from "react" //***** Dùng Hook: useEffect sẽ thay thế cho componentDidMount, useState thay thế cho state ở Class - Component
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' //***** Dùng Hook: thì dùng useSelector, useDispatch để map với action và reducer
import { appLoginRes, appLogout } from '../../actions/AppActions'

//***** Dùng Hook 
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch() //***** Dùng Hook: thay thế cho mapDispatchToProps ở Class - Component
    const app = useSelector(state => state.app) //***** Dùng Hook: thay thế cho mapStateToProps ở Class - Component
    console.log('GREEN LOG APP REDUCER AT LOGIN: ', app)
    const logout = () => {
        dispatch(appLogout()) //***** Dùng Hook: thay thế cho mapDispatchToProps ở Class - Component
    }
    const loginAPI = async () => { //***** Lưu ý: nếu dùng Promise thì không cần async
        //***** Nếu dùng Promise 
        // fetch(
        //     'http://i-web.com.vn/api/v1/auth/signin', 
        //     {
        //         method: 'POST',
        //         headers: {
        //           Accept: 'application/json',
        //           'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             client_data:
        //                 {
        //                     username:username,
        //                     password:password
        //                 }

        //         })
        //     })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log('LOGIN: ', json)
        //         return json;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        //***** Nếu dùng Async - Await 
        try {
            const response = await fetch(
                'http://i-web.com.vn/api/v1/auth/signin', //***** URL 
                //***** Config header trước khi request API lên server, có thể xem phần request API ở trang Home, sẽ viết kỹ hơn.
                {
                    method: 'POST', //***** Dùng phương thức POST
                    headers: {
                        Accept: 'application/json', //***** Config Accept theo format application/json
                        'Content-Type': 'application/json' //***** Config Content-Type theo format application/json
                        //***** Lưu ý, ở đây không cần Authorization, cái này do team Server định nghĩa và họ sẽ cung cấp cho mình biết. 
                        //***** Nhưng như chúng ta cũng hiểu, Login là để nhận về token, do đó, API này không cần tới Authorization
                    },
                    body: JSON.stringify({
                        // ***** Tham số sẽ được định dạng kiểu JSON, thường sẽ do team Server định nghĩa, và họ sẽ cung cấp cho chúng ta biết, ở đây, ta có 1 field là client_data, trong đó có 2 field là username và password
                        client_data:
                        {
                            username: username,
                            password: password
                        }

                    })
                }
            );
            const json = await response.json()
            console.log('LOGIN: ', json)
            dispatch(appLoginRes(json)) //***** Dùng Hook: thay thế cho mapDispatchToProps ở Class - Component
        } catch (error) {
            console.error(error)
        }
    }
    const enterBox = ({ title, isPassword = false, placeholder, value, changeText, style = null }) => (
        <View style={[styles.boxView, style]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.enterBox}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry={isPassword}
                    value={value}
                    onChangeText={changeText}
                />
            </View>
        </View>
    )
    const loginView = () => (
        <View>
            {enterBox({
                title: 'Username',
                placeholder: "Enter username",
                value: username,
                changeText: (text) => setUsername(text)
            })}
            {enterBox({
                style: { marginTop: 0 },
                title: 'Password',
                isPassword: true,
                placeholder: "Enter password",
                value: password,
                changeText: (text) => setPassword(text)
            })}
            <TouchableOpacity style={styles.btn} onPress={() => loginAPI()}>
                <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>
        </View>
    )
    const alreadyLogin = ({username}) => (
        <View style={styles.alreadyView}>
            <Text style={styles.alreadyUserTxt}>User name: </Text>
            <Text style={styles.alreadyUserTxt}>{username}</Text>
            <TouchableOpacity style={[styles.btn, styles.logoutBtn]} onPress={() => logout()}>
                <Text style={styles.txtBtn}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={styles.infoView}>
                <Text style={styles.alreadyUserTxt}>
                    {
                        app.userInfo.accessToken 
                        ? 'Thông tin của bạn:'
                        : 'Bạn chưa đăng nhập, xin vui lòng đăng nhập'
                    }
                </Text>
            </View>
            {  
            app.userInfo.accessToken 
                ? alreadyLogin({username: app.userInfo.username})
                : loginView()
            }
        </View>
    )
}

export default Login

import React from "react";
import {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import loginStyles from "./loginStyles";
import { useSelector, useDispatch } from "react-redux";
// import { appLoginResponse } from "../actions/appActions";

const Login = ({}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const dispatch = useDispatch()
    // const app = useSelector(state => state.app)

    const loginAPI = async() => {
        try {
            const response = await fetch(
              'http://i-web.com.vn/api/v1/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        client_data:
                            {
                                username: username,
                                password: password
                            }
                    })
                }
            )
            const result = await response.json()
            console.log('LOGIN', result)
            // dispatch(appLoginResponse(result))
        } catch (error) {
            console.error(error)
        }
    }
    const textInput = ({placeholder, isPassword = false, value, changeText}) => (
        <View style={loginStyles.box}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='grey'
                secureTextEntry={isPassword}
                value={value}
                onChangeText={changeText}
            />
        </View>
    )
    return(
        <View style={loginStyles.container}>
          {/*<View>*/}
          {/*  <Text>*/}
          {/*    {*/}
          {/*      app.userInfo.accessToken*/}
          {/*        ? 'Thông tin của bạn:'*/}
          {/*        : 'Bạn chưa đăng nhập, xin vui lòng đăng nhập'*/}
          {/*    }*/}
          {/*  </Text>*/}
          {/*</View>*/}
            <View style={{flex: 3}}>
                <Text>LOGIN</Text>
            </View>
            <View style={{flex: 6}}>
                <Text>Username</Text>
                {textInput({
                    placeholder: 'Username',
                    value: username,
                    changeText: (text) => setUsername(text)

                })}
                <Text>Password</Text>
                {textInput({
                    placeholder: 'Password',
                    isPassword: true,
                    value: password,
                    changeText: (text) => setPassword(text)
                })}

                <TouchableOpacity style={{alignItems: 'center'}}
                onPress={() => loginAPI()}
                >
                    <View style={loginStyles.login}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    )
}



export default Login

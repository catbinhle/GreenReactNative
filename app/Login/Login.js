import React, { useEffect, useState, Component } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import styles from './styles'

const Login = ({ changeProps, userInfo }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const logout = () => {
        changeProps(null)
    }
    const loginAPI = async () => {
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
            );
            const json = await response.json()
            console.log('LOGIN: ', json)
            changeProps(json)
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
                        userInfo?.accessToken 
                        ? 'Thông tin của bạn:'
                        : 'Bạn chưa đăng nhập, xin vui lòng đăng nhập'
                    }
                </Text>
            </View>
            {  userInfo?.accessToken 
                ? alreadyLogin({username: userInfo?.username})
                : loginView()
            }
        </View>
    )
}

export default Login
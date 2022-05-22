import React, { Component, useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import styles from './styles'

const Login = ({ }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // useEffect(() => {
    //     setTitle('Map')
    // },[])
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
                            username:username,
                            password:password
                        }

                })
              }
            );
            const json = await response.json()
            console.log('LOGIN: ', json)
          } catch (error) {
            console.error(error)
          }
    }
    const enterBox = ({title, isPassword = false, placeholder, value, changeText}) => (
        <View style={styles.boxView}>
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
    return (
        <View style={styles.container}>
            {enterBox({
                title: 'Username', 
                placeholder: "Enter username",
                value: username,
                changeText: (text) => setUsername(text) 
            })}
            {enterBox({
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
}

export default Login
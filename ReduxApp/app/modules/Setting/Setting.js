import React, { useEffect, useState } from "react" 
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux' 
import { appLogout } from '../../actions/AppActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Setting = () => {
    const dispatch = useDispatch()
    const logout = () => {
        AsyncStorage.removeItem("@account")
        dispatch(appLogout())
    }
    const app = useSelector(state => state.app) 
    return (
        <View style={styles.container}>
            <View>
                <Text>Thông tin cá nhân:</Text>
                <View style={styles.nameView}>
                    <Text>Tên: </Text>
                    <Text>{app?.userInfo?.username}</Text>
                </View>
                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={logout}
                >
                    <Text style={styles.logoutTxt}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Setting
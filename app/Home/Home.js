import React, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        data: []
    }

    getMoviesFromApiAsync = async (token) => {
        console.log('HOME TOKEN: ', 'Bearer ' +  token)
        try {
          const response = await fetch(
            'http://i-web.com.vn/api/v1/auth/post',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  token, 
                },
                body: JSON.stringify({}),
            }
          );
          const json = await response.json()
          console.log('HOME RES: ', json?.data)
          this.setState({
            data: json?.data
            }) 
        } catch (error) {
          console.error(error)
        }
      }

    goScreen = (item) => {
        this.props.navigation.navigate('DetailCity', item)
    }

    componentDidMount() {
        const {userInfo} = this.props 
        this.getMoviesFromApiAsync(userInfo?.accessToken)
    }

    componentDidUpdate(prevProps) {
        const {userInfo} = this.props 
        if (userInfo !== prevProps.userInfo) {
            this.getMoviesFromApiAsync(userInfo?.accessToken)
        }
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => this.goScreen(item)}>
            <Image style={styles.image} source={{uri: item?.image}}/>
            <View style={styles.opacityInfoView}/>
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const {userInfo} = this.props
        const {data} = this.state
        return (
            <View style={styles.container}>
                {userInfo?.accessToken ?
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id}
                    />
                : 
                    <View style={styles.emptyView}>
                        <Text>Bạn chưa đăng nhập, xin vui lòng đăng nhập</Text>
                        
                    </View>
                }
            </View>
        )
    }
}

export default Home
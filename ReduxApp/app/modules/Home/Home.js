import React, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"
import { bindActionCreators } from 'redux' //***** Dùng để gửi sự kiện lên Action, ở đây ta có sự kiện getHomeList
import { connect } from 'react-redux' //***** Dùng để connect giữa View - Action và Reducer (ở đây, View chính là Home)
import { getHomeList } from '../../actions/HomeActions' //***** import sự kiện cần dùng từ Action

//***** Dùng Class - Component
class Home extends Component {
    constructor(props) {
        super(props)
    }
    //***** Khai báo state trong Class - Component
    state = {}

    goScreen = (item) => {
        this.props.navigation.navigate('DetailCity', item)
    }

    componentDidMount() {
        // const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        // console.log('HOME User Info: ', userInfo)
        this.props.getHomeList()
    }

    componentDidUpdate(prevProps) {
        const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        if (userInfo !== prevProps.userInfo) {
            this.props.getHomeList()
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
        //***** Dùng app và home từ Reducer, lưu ý: phải có this.props
        const {userInfo} = this.props.app
        const {homeList} = this.props.home
        return (
            <View style={styles.container}>
                {userInfo?.accessToken ?
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={homeList}
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

//***** Liên kết với các sự kiện ở Action thông qua keyword dispatch
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getHomeList //***** Dùng action getHomeList
    }, dispatch)
)

//***** Đồng bộ với reducer, ở đây ta sẽ dùng app và home từ reducer
const mapStateToProps = state => {
    const { app, home } = state
      return { app, home }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home) //***** Liên kết action, reducer vs Home
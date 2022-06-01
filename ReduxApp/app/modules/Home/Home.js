import React, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"
import { bindActionCreators } from 'redux' //***** Dùng để gửi sự kiện lên Action, ở đây ta có sự kiện getHomeList
import { connect } from 'react-redux' //***** Dùng để connect giữa View - Action và Reducer (ở đây, View chính là Home)
import { getHomeList } from '../../actions/AppActions' //***** import sự kiện cần dùng từ Action

//***** Dùng Class - Component
class Home extends Component {
    constructor(props) {
        super(props)
    }
    //***** Khai báo state trong Class - Component
    state = {}

    //***** Request API get all list cho Home, ở đây dùng Async - Await
    callHomeListAPI = async (token) => {
        console.log('HOME TOKEN: ', 'Bearer ' +  token)
        try {
          const response = await fetch(
            'http://i-web.com.vn/api/v1/auth/post', //***** URL 
            //***** Config header trước khi request API lên server 
            {
                method: 'POST', //***** Dùng phương thức POST, có các phương thức: POST, GET, UPDATE, DELETE, PUT, tham khảo: https://topdev.vn/blog/restful-api-la-gi/
                headers: {
                    Accept: 'application/json', //***** Config Accept theo format application/json, có nhiều format như Text, XML...
                    'Content-Type': 'application/json', //***** Config Content-Type theo format application/json, có nhiều format như Text, XML...
                    'Authorization': 'Bearer ' +  token, //***** Gắn thêm Authorization cho headers theo yêu cầu từ phía team Server, có 1 số request API sẽ không có như ở Login tuỳ theo yêu cầu của Server team. (tức, sẽ có 1 document mô tả và team server sẽ cung cấp, ta dựa vào đó để viết). Lưu ý, ở đây gắn thêm Bearer, tuỳ team server định nghĩa mà ta sẽ gắn thêm key word nào đó.
                },
                body: JSON.stringify({
                    // ***** Tham số sẽ được định dạng kiểu JSON, tham khảo bên request API của Login
                }), //***** cấu hình body, tức sẽ thêm tham số vào đây, ở đây tham số không có
            }
          );
          //***** Chờ response trả về, và sau đó convert nó sang format JSON
          const json = await response.json()
          console.log('HOME RES: ', json?.data)
          this.props.getHomeList(json?.data) //***** Gọi sự kiện getHomeList lên Action. Lưu ý: với Class - Component thì nên có this.props
        } catch (error) {
          //***** Với cách viết try - catch, thì nó sẽ xử lý như sau:
          // Chương trình vẫn nhảy vào block try để run bình thường
          // Bất kỳ xử lý nào xảy ra lỗi, nó sẽ break ngay ở chính dòng lệnh đó, dừng lại và nhảy vào block catch để thông báo lỗi error
          // try - catch dùng để đảm bảo app không bị chết khi đang chạy. Thường được dùng trong các xử lý thread - vấn đề này sẽ được hướng dẫn kỹ hơn ở phần hiệu suất (performance)
          // Bạn có thể thử try - catch này với phép toán n/0, tại nếu bất kỳ số nào chia 0 cũng bị lỗi.
          // Ví dụ:
          // try { 1/0 } catch (error) { console.error(error) }
          console.error(error)
        }
    }

    goScreen = (item) => {
        this.props.navigation.navigate('DetailCity', item)
    }

    componentDidMount() {
        const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        console.log('HOME User Info: ', userInfo)
        this.callHomeListAPI(userInfo?.accessToken)
    }

    componentDidUpdate(prevProps) {
        const {userInfo} = this.props.app //***** Dùng app từ Reducer, lưu ý: phải có this.props
        if (userInfo !== prevProps.userInfo) {
            this.callHomeListAPI(userInfo?.accessToken)
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
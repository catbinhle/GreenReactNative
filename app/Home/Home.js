import react, { useState, Component, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = ({param, setTitle, goScreen}) => {
    useEffect(() => {
        setTitle('Home')
    },[])
    const [searchData, setSearchData] = useState(param)
    const filterData = (value) => {
        setSearchData(param.filter(item => item.name.includes(value)))
    }
    const _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>  goScreen('DetailScreen', item)}>
            <Image style={styles.image} source={{ uri: item?.image }} />
            <View style={styles.opacityInfoView} />
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
    )
    const _renderSearch = (param) => {
        return (
            <View style={styles.searchView}>
                <TextInput
                    style={{ flex: 1, marginRight: 10 }}
                    placeholder={'Nhập tên thành phố'}
                    placeholderTextColor={'grey'}
                    // secureTextEntry={true} => thường dùng cho mật khẩu
                    // keyboardType={'numeric'} => lựa chọn bàn phím
                    onChangeText={(value) => {
                        filterData(value)
                    }}
                />
                <Icon name="search" size={16} color="dark-grey" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {_renderSearch()}
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={searchData}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Home

// class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             searchData: [],
//             isRefreshing: false
//         }
//     }

//     filterData = (value) => {
//         const {param} = this.props
//         this.setState({
//             searchData: param.filter(item => item.name.includes(value))
//         })
//     }

//     goScreen = (item) => {
//         this.props.goScreen('DetailScreen', item)
//     }

//     componentDidMount() {
//         this.props.title('Home')
//     }

//     componentWillUnmount() {
//         debugger
//         console.log('BINH Test: componentWillUnmount')
//     }

//     _renderItem = ({item}) => (
//         <TouchableOpacity
//             style={styles.item}
//             onPress={() => this.goScreen(item)}>
//             <Image style={styles.image} source={{uri: item?.image}}/>
//             <View style={styles.opacityInfoView}/>
//             <View style={styles.infoView}>
//                 <Text style={styles.txtName}>{item?.name}</Text>
//             </View>
//         </TouchableOpacity>
//     )

//     _renderSearch = () => {
//         return (
//             <View style={styles.searchView}>
//                 <TextInput
//                     style={{flex: 1, marginRight: 10}}
//                     placeholder={'Nhập tên thành phố'}
//                     placeholderTextColor={'grey'}
//                     // secureTextEntry={true} => thường dùng cho mật khẩu
//                     // keyboardType={'numeric'} => lựa chọn bàn phím
//                     onChangeText={(value) => this.filterData(value)}
//                 />
//                 <Icon name="search" size={16} color="dark-grey" />
//             </View>
//         )
//     }

//     render() {
//         const {param} = this.props
//         const {searchData, isRefreshing} = this.state
//         console.log('BINH TEST: ',searchData)

//         return (
//             <View style={styles.container}>
//                 {this._renderSearch(param)}
//                 <FlatList
//                     numColumns={2}
//                     showsVerticalScrollIndicator={false}
//                     legacyImplementation={false}
//                     data={searchData.length > 0 ? searchData : param}
//                     renderItem={this._renderItem}
//                     keyExtractor={(item, index) => index.toString()}
//                     // onEndReachedThreshold={0.1}
//                     // onEndReached={() => {
//                     //     debugger
//                     //     console.log('Load more data, if we have backend team')
//                     // }}
//                     refreshing={isRefreshing}
//                     onRefresh={() => {
//                         // debugger
//                         console.log('Refresh Flatlist')
//                         this.setState({isRefreshing: true})
                        
//                         setTimeout(() => {
//                             this.setState({isRefreshing: false})
//                             console.log('Binh Test 1')
//                         }, 2000)
//                         console.log('Binh Test 2')
                        
//                     }}
//                 />
//             </View>

//         )
//     }
// }

// export default Home
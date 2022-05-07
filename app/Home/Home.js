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
<<<<<<< HEAD
    const _renderItem = ({ item }) => (
        <TouchableOpacity
=======

    state = {

    }

    goScreen = (item) => {
        // this.props.goScreen('DetailScreen', item)
        this.props.navigation.navigate('Detail', item)
    }

    componentDidMount() {
        // this.props.title('Home')
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59
            style={styles.item}
            onPress={() =>  goScreen('DetailScreen', item)}>
            <Image style={styles.image} source={{ uri: item?.image }} />
            <View style={styles.opacityInfoView} />
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
    )
<<<<<<< HEAD
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
=======

    render() {
        // const {data} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59
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

<<<<<<< HEAD
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
=======
const data = [
    {
        name: 'Ha Noi',
        desc: 'The capital in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ThapRua.jpg/2560px-ThapRua.jpg'
    },
    {
        name: 'Ho Chi Minh city',
        desc: 'The bigest city in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/1024px-Notre_dame_saigon.jpg'
    },
    {
        name: 'Hue',
        desc: 'The old capital in Vietnam',
        image: 'https://cdnimg.vietnamplus.vn/t620/uploaded/mzdic/2021_12_16/dai_noi_hue_1612.jpg'
    },
    {
        name: 'Da Nang',
        desc: 'The city in central of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg/308px-Han_River_Bridge_in_Vietnam_Night_View.jpg'
    },
    {
        name: 'Da Lat',
        desc: 'The city in central highland of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Da_Lat_train_station_21.jpg/1920px-Da_Lat_train_station_21.jpg'
    },
    {
        name: 'Nha Trang',
        desc: 'The beach city in central of Vietnam',
        image: 'https://statics.vinpearl.com/bien-nha-trang-ve-dem-9%20(1)_1634535402.jpg'
    },
    {
        name: 'Hoi An',
        desc: 'The old town in central of Vietnam',
        image: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg'
    },
    {
        name: 'Can Tho',
        desc: 'The city in west south of Vietnam',
        image: 'https://tudienwiki.com/wp-content/uploads/2015/10/cau-can-tho.jpg'
    },
    {
        name: 'Phu Quoc',
        desc: 'The island city in west south of Vietnam',
        image: 'https://media.travel.com.vn/tour/tfd_220412012542_308483.jpg'
    },
    {
        name: 'Vung Tau',
        desc: 'The city in southest of Vietnam',
        image: 'https://i1-dulich.vnecdn.net/2021/12/06/13-2269-1638784751.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=4cERFe2QXEdklLLXCbYHyg'
    },
    {
        name: 'Buon Me Thuot',
        desc: 'The bigest city in central highland of Vietnam',
        image: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/vno_BMT1.jpg'
    },
]

export default Home
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59

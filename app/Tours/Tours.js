import react, { Component, useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"
// import Icon from 'react-native-vector-icons/FontAwesome'

const Tours = ({param, setTitle, goScreen}) => {
    useEffect(() => {
        setTitle('Tours')
    },[])
    const [showMoreList, setShowMoreList] = useState([])
    const onShowMore = (index) => {
        let list = [...showMoreList]
        if (showMoreList.indexOf(index) > -1) {
            list.splice(showMoreList.indexOf(index), 1)
        } else {
            list.push(index)
        }
        setShowMoreList(list)
    }
    const _renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <View style={styles.aboveItem}>
                <View style={styles.leftItemView}>
                    <Image style={styles.logo} source={{ uri: item?.image }} />
                    <View style={styles.infoView}>
                        <Text style={styles.txtName}>{item?.name}</Text>
                        <Text style={styles.txtDesc}>{item?.desc}</Text>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.showMore}
                    onPress={() => onShowMore(index)}
                >
                    <Text style={styles.txtName}>...</Text>
                </TouchableOpacity>
                {/* <Icon name="angle-right" size={24} color="black" /> */}
            </View>
            {showMoreList.indexOf(index) > -1 ?
                <View style={{
                    padding: 16
                }}>
                    <View style={styles.aboveItem}>
                        <Text style={styles.txtName}>Chi phí</Text>
                        <Text style={styles.txtName}>3000.000 đ</Text>
                    </View>
                    <View style={styles.aboveItem}>
                        <Text style={styles.txtName}>Thời gian</Text>
                        <Text style={styles.txtName}>3000.000 đ</Text>
                    </View>
                    <View style={styles.aboveItem}>
                        <Text style={styles.txtName}>Đánh giá</Text>
                        <Text style={styles.txtName}>*****</Text>
                    </View>
                </View>
                :
                null
            }
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={param}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Tours

// class Tours extends Component {
//     constructor(props) {
//         super(props)
//     }

//     state = {

//     }

//     goScreen = (item) => {
//         this.props.goScreen('DetailScreen', item)
//     }

//     _renderItem = ({item}) => (
//         <TouchableOpacity 
//             style={styles.item}
//             onPress={() => this.goScreen(item)}>
//             <View style={styles.leftItemView}>
//                 <Image style={styles.logo} source={{uri: item?.image}}/>
//                 <View style={styles.infoView}>
//                     <Text style={styles.txtName}>{item?.name}</Text>
//                     <Text style={styles.txtDesc}>{item?.desc}</Text>
//                 </View>
//             </View>
//             <Icon name="angle-right" size={24} color="black" />
//         </TouchableOpacity>
//     )

//     componentDidMount() {
//         this.props.title('Cities')
//     }

//     render() {
//         const {param} = this.props
//         return (
//             <View style={{ flex: 1 }}>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     data={param}
//                     renderItem={this._renderItem}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         )
//     }
// }

// export default Tours
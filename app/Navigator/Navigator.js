import react, {Component} from "react"
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./styles"
import Home from "../Home/Home"
import Cities from "../Cities/Cities"
import DetailCity from "../DetailCity/DetailCity"
import Icon from 'react-native-vector-icons/FontAwesome'
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes"

class Navigator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexScreen: 0,
            param: null,
            title: ''
        }
    }

    screens = ['Home', 'City', 'DetailScreen']
    tabbarScreen = ['Home', 'City']

    onGoScreen = (screen, param) => {
        this.setState({
            indexScreen: this.screens.indexOf(screen),
            param: param
        })
    }

    _renderHeader = () => (
        <View style={styles.header}>
            { 
                this.state.indexScreen > 1 
                ?
                <TouchableOpacity onPress={() => this.setState({indexScreen: 1})}>
                    <Icon name="angle-left" size={24} color="black" /> 
                </TouchableOpacity>
                :
                <View/>
            }
            <Text style={styles.txtHeader}>{this.state.title}</Text>
            <View/>
        </View>
    )

    _renderTabbarBottom = () => (
        <View style={this.state.indexScreen > 1 ? styles.hideTabbar : styles.tabbar}>
            {
                this.tabbarScreen.map((item, index) => (
                    <TouchableOpacity 
                        style={[styles.tabbarItem, this.state.indexScreen === index ? styles.activeItem : styles.deactiveItem]}
                        onPress={() => this.setState({indexScreen: index})}>
                        <Text style={this.state.indexScreen === index ? styles.activeTxtItem : styles.deactiveTxtItem}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )

    _renderContentView = () => {
        const {indexScreen, param} = this.state
        switch(indexScreen) {
            case 0: return (
                <Home 
                    param={data} 
                    title={(title) => this.setState({title: title})}
                />)
            case 1: return (
                <Cities 
                    param={data} 
                    title={(title) => this.setState({title: title})}
                    goScreen={(screen, param) => this.onGoScreen(screen, param)}
                />)
            case 2: return (
                <DetailCity 
                    title={(title) => this.setState({title: title})}
                    param={param}
                />)
        }  
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this._renderHeader()}
                {this._renderContentView()}
                {this._renderTabbarBottom()}
            </SafeAreaView>
        )
    }
}

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

export default Navigator
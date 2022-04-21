import react, {Component} from "react"
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./styles"
import Home from "../Home/Home"
import Cities from "../Cities/Cities"

class Navigator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexScreen: 0
        }
    }

    screens = ['Home', 'City']

    _renderHeader = () => (
        <View style={{height: 44, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'grey'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.screens[this.state.indexScreen]}</Text>
        </View>
    )

    _renderTabbarBottom = () => (
        <View style={styles.tabbar}>
            {
                this.screens.map((item, index) => (
                    <TouchableOpacity 
                        style={[styles.tabbarItem, this.state.indexScreen === index ? styles.activeItem : styles.deactiveItem]}
                        onPress={() => this.setState({indexScreen: index})}>
                        <Text style={this.state.indexScreen === index ? styles.activeTxtItem : styles.deactiveTxtItem}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )

    render() {
        const {indexScreen} = this.state
        return (
            <SafeAreaView style={styles.container}>
                {this._renderHeader()}
                {indexScreen === 0 ?
                    <Home data={data}/>
                    :
                    <Cities data={data}/>
                }
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
]

export default Navigator
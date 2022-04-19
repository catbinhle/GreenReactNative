import react, {Component} from "react"
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./home.styles"
import Home from "./Home"
import City from "./City"

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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Home</Text>
        </View>
    )

    _renderTabbarBottom = () => (
        <View style={{height: 44, flexDirection: 'row', justifyContent: 'space-between', borderTopColor: 'grey', borderTopWidth: 0.5}}>
            {
                this.screens.map(item => (
                    <TouchableOpacity 
                        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.setState({indexScreen: 0})}>
                        <Text>{item}</Text>
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
                    <Home/>
                    :
                    <City/>
                }
                {this._renderTabbarBottom()}
            </SafeAreaView>
        )
    }
}

export default Navigator
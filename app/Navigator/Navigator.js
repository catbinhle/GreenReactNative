import react, {Component} from "react"
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from "./styles"
import Home from "../Home/Home"
import City from "../City/City"

class Navigator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexScreen: 0
        }
    }

    screens = ['Home', 'City']

    _renderHeader = () => (
<<<<<<< HEAD:app/Navigator.js
        <View style={{height: 44, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'grey'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.screens[this.state.indexScreen]}</Text>
=======
        <View style={styles.header}>
            <Text style={styles.txtHeader}>{this.screens[this.state.indexScreen]}</Text>
>>>>>>> 6936a26bfe540a429703b028b8a1438b36753016:app/Navigator/Navigator.js
        </View>
    )

    _renderTabbarBottom = () => (
<<<<<<< HEAD:app/Navigator.js
        <View style={{height: 44, flexDirection: 'row', justifyContent: 'space-between', borderTopColor: 'grey', borderTopWidth: 0.5,backgroundColor:'steelblue'}}>
            {
                this.screens.map((item, index) => (
                    <TouchableOpacity 
                        style={{flex: 1, alignItems: 'center', justifyContent: 'center',borderColor:'red'}}
=======
        <View style={styles.tabbar}>
            {
                this.screens.map((item, index) => (
                    <TouchableOpacity 
                        style={styles.tabbarItem}
>>>>>>> 6936a26bfe540a429703b028b8a1438b36753016:app/Navigator/Navigator.js
                        onPress={() => this.setState({indexScreen: index})}>
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
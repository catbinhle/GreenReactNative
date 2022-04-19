import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, ScrollViewBase} from 'react-native'
import styles from "./home.styles"
import Popup from "./Popup"
import Icon from 'react-native-vector-icons/FontAwesome'

class City extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    render() {

        return (
            <View style={{flex: 1}}>

                <View style={{
                    height: 50,
                    margin: 16,
                    borderRadius: 6,
                    shadowColor: 'black',
                    borderRadius: 8,
                    shadowOffset: {
                      height: 10
                    },
                    elevation: 10,
                    shadowRadius: 8,
                    shadowOpacity: 0.1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text>ABC</Text>
                    <Icon name="angle-right" size={24} color="black" />

                </View>
            </View>
        )
    }
}

export default City
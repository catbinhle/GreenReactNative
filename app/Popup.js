import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './home.styles'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {item, onPress} = this.props
        return (
            <View style={styles.selectedView}>
                <View style={styles.contentSelectedView}>
                    <Image style={styles.imageSelectedView} source={{uri: item?.image}}/>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 'bold'}}>{item?.city}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.selectedView, styles.overlaySelectedView]}
                        onPress={onPress}/>
            </View>
        )
    }
}

export default Popup
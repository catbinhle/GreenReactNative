import react, { Component } from "react";
import Styles from "../Home/home.Styles";
import { View, Image, TouchableOpacity } from "react-native";

export default class Popup extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {image,onPress} = this.props
        return(
            <View style={Styles.selectedView}>
                <View style={Styles.selectedContent}>
                    <Image
                        style={Styles.selectedImage}
                        source={image}
                    />
                </View>
                <TouchableOpacity
                    style={[Styles.escapeClick,Styles.selectedView]}
                    onPress={onPress}
                />
            </View>
        )
    }
}
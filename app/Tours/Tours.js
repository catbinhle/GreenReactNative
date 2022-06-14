import React from "react";
import {Component} from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import toursStyles from "./toursStyles";
import provinces from "../Data/Province/provinces";

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _goScreen(province) {
        this.props.navigation.navigate('TourTravel', province)
    }
    _renderProvince(province) {
        return(
            <TouchableOpacity
                style={toursStyles.province}
                onPress={() => this._goScreen(province)}
            >
                {/*chia làm 2 view: view trên chứa hình và chữ, view dưới chứa chữ*/}
                {/*1. View trên: hình và chữ*/}
                <View style={{flex: 5, flexDirection: 'row'}}>
                    {/*1.1 Hình*/}
                    <View style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            style={toursStyles.image}
                            source={{uri: province.image}}
                        />
                    </View>
                    {/*1.2 Chữ*/}
                    <View style={{marginHorizontal: 16, paddingVertical: 24}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 8}}>{province.name}</Text>
                        <Text style={{fontSize: 18, fontWeight: '600'}}>{province.price}</Text>
                    </View>
                </View>
                <View style={{flex: 3, paddingHorizontal: 70, paddingTop: 8}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Du Lich: {province.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return(
           <View style={{flex: 1, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: '#CC9999'}}>
               <ScrollView>
                   {
                       provinces.map((province) => {
                           return this._renderProvince(province)
                       })
                   }
               </ScrollView>

           </View>
        )
    }
}

export default Tours

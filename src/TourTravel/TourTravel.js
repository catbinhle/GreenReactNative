import {Component} from "react";
import {View, Text, Image, ScrollView} from "react-native";
import tourTravelStyles from "./tourTravelStyles";

class TourTravel extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    _renderService(service) {
        return(
            <View style={tourTravelStyles.service}>
                <Image
                    style={{height: 105, width: 145, borderRadius: 15}}
                    source={{uri: service.image}}
                />
                <Text>{service.address}</Text>
            </View>
        )
    }
    _renderColumn(column, tourTravel) {
        return(
            <View style={{marginHorizontal: 20}}>
                {
                    tourTravel.services.map((service, index) => {
                        if (index % 2 === column) {
                            return this._renderService(service)
                        }
                    })
                }
            </View>
        )
    }
    render() {
        const tourTravel = this.props.route.params
        return(
            <View style={{flex: 1, backgroundColor: '#FFFFCC'}}>
                {/*body gồm 2 phần: introduce và service*/}
                <View style={{flex: 5}}>
                {/*1. introduce:}
                    {/*1.1 Hình*/}
                    <View style={{flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20}}>
                        <View style={{marginRight: 30}}>
                            <Image
                                style={{height: 230, width: 200, borderRadius: 30}}
                                source={{uri: tourTravel.image}}
                            />
                        </View>
                        {/*1.2 Chữ*/}
                        <View style={{marginVertical: 20}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Giá Cả</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 24}}>{tourTravel.price}</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Du Lịch</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 24}}>{tourTravel.time}</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Đánh Giá</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{tourTravel.rating}</Text>
                        </View>
                    </View>
                </View>
                {/*2. service*/}
                <View style={{flex: 5, paddingHorizontal: 20, paddingVertical: 20}}>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Service</Text>
                    </View>
                    <ScrollView>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                {
                                    [0,1].map((column) => {
                                        return this._renderColumn(column, tourTravel)
                                    })
                                }
                            </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

export default TourTravel
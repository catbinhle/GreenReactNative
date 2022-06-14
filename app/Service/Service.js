import {Component} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import MapView from "react-native-maps";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        const service = this.props.route.params
        return(
            <View style={{flex: 1}}>
                {/*Màn hình Service có 2 phần: Hình của service và nội dung*/}
                {/*1. Hình của service*/}
                <View style={{flex: 3, marginBottom: 24}}>
                    <Image
                        style={{height: 200, width: Dimensions.get('window').width}}
                        source={{uri: service.image}}
                    />
                </View>
                {/*2. Nội dung: đánh giá, địa chỉ, map*/}
                <View style={{flex: 6}}>
                    {/*2.1 Đánh giá*/}
                    <View style={{flexDirection: 'row', paddingHorizontal: 16, marginVertical: 8}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rating:  </Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{service.rating}</Text>
                    </View>
                    {/*2.2 Địa chỉ*/}
                    <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Address:  </Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{service.address}</Text>
                    </View>
                    {/*2.3 Map*/}
                    <View style={{height: 300, borderColor: '#000066', borderWidth: 3, marginVertical: 10, marginHorizontal: 25}}>
                        <MapView
                            style={{flex: 1}}
                            provider={'google'}
                            region={{
                                latitude: 10.77328140472832,
                                longitude: 106.6891522881816,
                                latitudeDelta: 0.025,
                                longitudeDelta: 0.025,
                            }}
                            zoomEnabled={true}
                            showsUserLocation={true}
                        />
                    </View>
                </View>


            </View>
        )
    }
}

export default Service
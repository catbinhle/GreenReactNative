import {Component} from "react";
import {View, Text, Image, Dimensions, TextInput, ScrollView, TouchableOpacity} from "react-native";
import detailStyles from "./detailStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // searchService: province.services
        }
    }
    // _renderSearchService(value, province) {
    //     this.setState({
    //         searchService:
    //             province.services.filter((service) =>
    //                 service.address.includes(value)
    //             )
    //     })
    // }
    _goScreen(service){
        this.props.navigation.navigate('Service', service)
    }
    _renderService(service) {
        return(
            <TouchableOpacity
                style={detailStyles.service}
                onPress={() => this._goScreen(service)}
            >
                <Image
                    style={{height: 120, width: 145, borderTopLeftRadius: 19, borderTopRightRadius: 19}}
                    source={{uri: service.image}}
                />
                <Text style={{fontSize: 15, marginVertical: 8}}>{service.address}</Text>
            </TouchableOpacity>
        )
    }
    _renderColumn(column, province) {
        return(
            <View style={{marginHorizontal: 16}}>
                {
                    province.services.map((service, index) => {
                        if (index % 2 === column)
                            return this._renderService(service)
                    })
                }
            </View>
        )
    }
    render() {
        const province = this.props.route.params
        return(
            <View style={{flex: 1}}>
                {/*phần body có 2 phần: introduce và service*/}
                {/*1. introduce: có 2 phần: hình và search service*/}
                <View style={detailStyles.introduce}>
                    {/*1.1 image*/}
                    <Image
                        style={{height: 150, width:300, marginVertical: 16, borderRadius: 10}}
                        source={{uri: province.image}}
                    />
                    {/*1.2 search service*/}
                    <View style={detailStyles.search}>
                        <View style={{flex: 7, paddingHorizontal: 16, justifyContent: 'center'}}>
                            <TextInput
                                placeholder={'Tim kiem Dich vu'}
                                placeholderTextColor={'grey'}
                                // onChangeText={(value) => {
                                //     this._renderSearchService(value, province)
                                // }}

                            />
                        </View>
                        <View style={{flex: 2, paddingLeft: 100, justifyContent: 'center'}}>
                            <Icon
                                name='search'
                                size={24}
                            />
                        </View>
                    </View>
                </View>
                {/*2. Service*/}
                <View style={detailStyles.content}>
                    <View style={{paddingVertical: 16}}>
                        <Text style={{fontSize: 19, fontWeight: 'bold'}}>Services</Text>
                    </View>
                    {/*chia cột*/}
                    <ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            {
                                [0,1].map((column) => {
                                    return this._renderColumn(column, province)
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default Detail
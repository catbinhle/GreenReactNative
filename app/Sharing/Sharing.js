import React from "react";
import {Component} from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import sharingInfo from "../Data/Sharing/sharingInfo";
import sharingStyles from "./sharingStyles";
import Icon from 'react-native-vector-icons/FontAwesome5'
import sharing from "../Data/Sharing/Sharing";

class Sharing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreList: []
        }
    }
    _onShowMore(index) {
            {
                let list = this.state.showMoreList
                // if (this.state.showMoreList.indexOf(index) > -1) {
                //     list.splice(this.state.showMoreList.indexOf(index), 1)
                // } else {
                //     list.push(index)
                // }
                if (this.state.showMoreList.indexOf(index) == -1) {
                    list.push(index)
                }

                this.setState({showMoreList: list})
                console.log(this.state.showMoreList)
            }
    }
    _renderSharing(comment, index) {
        return(
            <View style={sharingStyles.comment}>
                {/*gồm 2 phần: thông tin (hình và chữ), nút Icon*/}
                {/*1. Thông tin*/}
                <View style={{flexDirection: 'row'}}>
                    {/*1.1 Hình*/}
                    <View style={{flex: 3, alignItems: 'center', paddingTop: 16}}>
                        <Image
                            style={sharingStyles.image}
                            source={{uri: comment.image}}
                        />
                    </View>
                    {/*1.2 Chữ*/}
                    <View style={{flex: 6, paddingTop: 16, marginLeft: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="book" size={16} color="black" />
                            <Text style={{marginHorizontal: 10, fontSize: 19, fontWeight: 'bold'}}>{comment.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <Icon name="car" size={16} color="black" />
                            <Text style={{marginHorizontal: 10, fontSize: 17}}>{comment.transport}</Text>
                        </View>
                    </View>
                </View>
                {/*2. Nút Icon*/}
                {
                    this.state.showMoreList.indexOf(index) > -1 ?
                        <View style={{paddingHorizontal: 10}}>
                            <View style={sharingStyles.showMoreItem}>
                                <Text style={sharingStyles.txtTitleShowMoreItem}>Kinh Nghiệm</Text>
                                <Text style={sharingStyles.txtContentShowMoreItem}>{comment.experience}</Text>
                            </View>
                            <View style={sharingStyles.showMoreItem}>
                                <Text style={sharingStyles.txtTitleShowMoreItem}>Giá Cả</Text>
                                <Text style={sharingStyles.txtContentShowMoreItem}>{comment.cost}</Text>
                            </View>
                            <View style={sharingStyles.showMoreItem}>
                                <Text style={sharingStyles.txtTitleShowMoreItem}>Chỗ Ở</Text>
                                <Text style={sharingStyles.txtContentShowMoreItem}>{comment.accomodation}</Text>
                            </View>

                        </View>
                        : null

                }
                <TouchableOpacity
                    style={{ alignItems: 'flex-end'}}
                    onPress={() => this._onShowMore(index)}
                >
                    {
                        this.state.showMoreList.indexOf(index) == -1 ?
                            <Icon
                                name="angle-down"
                                size={20}
                                color="black"
                            />
                            : <Icon
                                name="angle-up"
                                size={20}
                                color="black"
                            />
                    }


                </TouchableOpacity>

            </View>
        )
    }
    render() {
        return(
            <ScrollView style={{flex: 1, backgroundColor: '#f59494'}}>
                <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 16, alignItems: 'center'}}>
                    {
                        sharingInfo.map((comment, index) => {
                            return this._renderSharing(comment, index)
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

export default Sharing

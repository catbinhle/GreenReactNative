import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const ItemHotel = props => {
  const {item, index} = props;
  const {navigate} = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={item.image} />
      </View>
      <View style={styles.txtContainer}>
        <Text>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          {[1, 2, 3, 4, 5].map((number, index) => {
            return (
              <AntDesign
                key={index.toString()}
                name="star"
                color={number <= item.rating ? 'red' : 'gray'}
              />
            );
          })}
        </View>
        <Text>{item.sub_name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate('Details', {item, index})}
        style={{backgroundColor: '#0AA1DD', borderRadius: 25}}>
        <Entypo name="chevron-right" size={23} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemHotel;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    backgroundColor: '#F9F3EE',
    elevation: 3,
    padding: 5,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  imageContainer: {
    borderWidth: 0.5,
    borderRadius: 25,
    elevation: 3,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  txtContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

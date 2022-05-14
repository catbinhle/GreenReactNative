import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('screen');

const ShowMore = props => {
    const {item,visible,onPress} = props

  return (
    <Modal transparent visible={visible}>
      <TouchableOpacity
        style={{backgroundColor: '#000000aa', flex: 1}}
        onPress={onPress}
      />
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          width: width,
          height: height * 0.6,
          padding: 10,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{fontSize: 16, lineHeight: 25, textAlign: 'justify'}}>
            {item.description}
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ShowMore;

const styles = StyleSheet.create({});

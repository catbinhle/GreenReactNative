import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomButton = props => {
  const {iconName, title, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
      }}>
      <MaterialIcons name={iconName} size={25} />
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    marginLeft: 10,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const IconRow = ({ iconName, title }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialIcons
        style={styles.iconStyle}
        name={iconName}
        size={24}
        color="black"
      />
      <Text>{title}</Text>
    </View>
  );
};

export default IconRow;

const styles = StyleSheet.create({
  iconStyle: {
    marginHorizontal: 5,
  },
});

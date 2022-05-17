import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const IconSocial = ({ nameIcon, color }) => {
  return (
    <TouchableOpacity style={styles.iconStyle}>
      <MaterialCommunityIcons name={nameIcon} size={40} color={color} />
    </TouchableOpacity>
  );
};

export default IconSocial;

const styles = StyleSheet.create({
  iconStyle: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginHorizontal: 8,
  },
});

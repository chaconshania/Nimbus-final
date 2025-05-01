import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Ionicons name={iconName} size={24} color={"#6E6D6D"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-start",
  },
});

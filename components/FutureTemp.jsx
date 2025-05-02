import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function FutureTemp({ hour, temp, icon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.hourText}>{hour}</Text>
      <MaterialCommunityIcons
        name={icon}
        size={38}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.tempText}>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 74,
    height: 125,
    backgroundColor: "#A8E1FF",
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 12,
  },
  hourText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  tempText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    textAlign: "center",
  },
});

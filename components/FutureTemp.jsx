import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function FutureTemp({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.hourText}>Now</Text>
      <MaterialCommunityIcons
        name="weather-cloudy"
        size={38}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.tempText}>65°</Text>
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

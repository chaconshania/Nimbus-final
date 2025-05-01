import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description({ weatherData }) {
  if (!weatherData) return null;

  const { temperature, condition } = weatherData;

  let suggestion = "";

  if (temperature <= 40) {
    suggestion = "It's very cold. You should wear a thick coat and scarf.";
  } else if (temperature <= 60) {
    suggestion = "A light jacket or sweater should be fine.";
  } else if (temperature >= 85) {
    suggestion = "It's hot! Wear something breathable and stay hydrated.";
  } else {
    suggestion = "The weather seems mild. Dress comfortably.";
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text>{suggestion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description({ weatherData, preferences }) {
  if (!weatherData || !preferences) return null;

  const { temperature, condition } = weatherData;
  const { tooColdTemp, tooWarmTemp } = preferences;

  let suggestion = "";

  if (temperature <= parseFloat(tooColdTemp)) {
    suggestion = "Wear a thick coat and scarf!";
  } else if (temperature >= parseFloat(tooWarmTemp)) {
    suggestion = "Wear breathable clothes and stay hydrated.";
  } else {
    suggestion = "Dress casually.";
  }

  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("rain")) {
    suggestion += " Don’t forget an umbrella!";
  } else if (conditionLower.includes("snow")) {
    suggestion += " It's going to snow today!";
  } else if (conditionLower.includes("wind")) {
    suggestion += " It’s windy though, so consider bundling up...";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.suggestionText}>{suggestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  suggestionText: {
    fontSize: 24,
    color: "#666666",
  },
});

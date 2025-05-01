import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description({ weatherData, preferences }) {
  if (!weatherData || !preferences) return null;

  const { temperature, condition } = weatherData;
  const { tooColdTemp, tooWarmTemp } = preferences;

  let suggestion = "";

  if (temperature <= parseFloat(tooColdTemp)) {
    suggestion = "It's very cold today. Wear a thick coat and scarf!";
  } else if (temperature >= parseFloat(tooWarmTemp)) {
    suggestion = "It’s too warm! Wear breathable clothes and stay hydrated.";
  } else {
    suggestion = "Perfect temperature! Dress casually.";
  }

  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("rain")) {
    suggestion += " Don’t forget an umbrella!";
  } else if (conditionLower.includes("snow")) {
    suggestion += " It's going to snow today!";
  } else if (conditionLower.includes("wind")) {
    suggestion += " It’s windy today!";
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.suggestionText}>{suggestion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

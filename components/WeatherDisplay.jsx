import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WeatherDisplay({
  weatherData,
  determineColor,
  getFeelingLabel,
}) {
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.locationText}>{weatherData.city}</Text>
      <Text style={styles.headingText}>
        It's{" "}
        <Text
          style={[
            styles.weatherText,
            { color: determineColor(weatherData.feelsLike) },
          ]}
        >
          {weatherData.temperature.toFixed(2)}°F{" "}
        </Text>
        today.
      </Text>
      <Text style={styles.headingText}>
        It feels{" "}
        <Text
          style={[
            styles.weatherText,
            { color: determineColor(weatherData.feelsLike) },
          ]}
        >
          {getFeelingLabel(weatherData.feelsLike)}
        </Text>
        !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    marginTop: 20,
  },
  locationText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 30,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "400",
  },
  weatherText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

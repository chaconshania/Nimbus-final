import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FutureTemp from "./FutureTemp";

export default function ForecastSlider() {
  const futureTemps = [
    { hour: "Now", temp: "65°", icon: "weather-cloudy" },
    { hour: "1 PM", temp: "67°", icon: "weather-partly-cloudy" },
    { hour: "2 PM", temp: "68°", icon: "weather-sunny" },
    { hour: "3 PM", temp: "70°", icon: "weather-sunny" },
    { hour: "4 PM", temp: "72°", icon: "weather-sunny" },
    { hour: "5 PM", temp: "73°", icon: "weather-sunny" },
  ];

  return (
    <View style={styles.sliderContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {futureTemps.map((item, index) => (
          <View key={index} style={styles.cardWrapper}>
            <FutureTemp
              key={index}
              hour={item.hour}
              temp={item.temp}
              icon={item.icon}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
  cardWrapper: {
    marginRight: 3,
  },
});

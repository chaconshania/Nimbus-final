import React, { useState } from "react";
import { View, Button, ActivityIndicator, StyleSheet } from "react-native";
import SearchModal from "../components/SearchModal";
import WeatherDisplay from "../components/WeatherDisplay";
import Description from "../components/Description";
import ForecastSlider from "../components/ForecastSlider";

import IconButton from "../components/IconButton";

export default function Home({
  city,
  setCity,
  getWeather,
  loading,
  weatherData,
  preferences,
  determineColor,
  showModal,
  setShowModal,
}) {
  const getFeelingLabel = (feelsLikeTemp) => {
    if (!preferences) return "unknown";

    const cold = parseFloat(preferences.tooColdTemp);
    const warm = parseFloat(preferences.tooWarmTemp);

    if (feelsLikeTemp <= cold) return "cold";
    if (feelsLikeTemp >= warm) return "hot";
    return "perfect";
  };

  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <SearchModal
              visible={showModal}
              onClose={() => setShowModal(false)}
              city={city}
              setCity={setCity}
              getWeather={() => {
                getWeather();
                setShowModal(false);
              }}
            />

            {weatherData && (
              <>
                <WeatherDisplay
                  weatherData={weatherData}
                  determineColor={determineColor}
                  getFeelingLabel={getFeelingLabel}
                />
                <Description
                  weatherData={weatherData}
                  preferences={preferences}
                />
              </>
            )}
          </>
        )}
      </View>
      <ForecastSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  weatherContainer: {
    padding: 20,
  },
  searchButton: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-start",
  },
});

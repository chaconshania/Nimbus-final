import React, { useState } from "react";
import { View, Button, ActivityIndicator, StyleSheet } from "react-native";
import SearchModal from "../components/SearchModal";
import WeatherDisplay from "../components/WeatherDisplay";
import Description from "../components/Description";

export default function Home({
  city,
  setCity,
  getWeather,
  loading,
  weatherData,
  determineColor,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Button title="Search" onPress={() => setShowModal(true)} />
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
              />
              <Description weatherData={weatherData} />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
});

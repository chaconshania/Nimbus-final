import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from "react-native";

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
          {/* Button to open the search bar */}
          <Button title="Search" onPress={() => setShowModal(true)} />

          {/*Search popup modal */}
          <Modal animationType="slide" transparent={true} visible={showModal}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Search Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter a city"
                  value={city}
                  onChangeText={setCity}
                />
                <View style={styles.buttonRow}>
                  <Button
                    title="Search"
                    onPress={() => {
                      getWeather();
                      setShowModal(false);
                    }}
                  />
                  <Button
                    title="Cancel"
                    onPress={() => setShowModal(false)}
                    color="red"
                  />
                </View>
              </View>
            </View>
          </Modal>
          {/* Weather Data that you see in the beginning */}
          {weatherData && (
            <View style={styles.weatherInfo}>
              <Text style={[styles.locationText]}>{weatherData.city}</Text>
              <Text style={styles.headingText}>
                It's{" "}
                <Text
                  style={[
                    styles.weatherText,
                    { color: determineColor(weatherData.temperature) },
                  ]}
                >
                  {weatherData.temperature.toFixed(2)}°F{" "}
                </Text>
                today.
              </Text>
              <Text style={styles.headingText}>
                It feels like{" "}
                <Text
                  style={[
                    styles.weatherText,
                    { color: determineColor(weatherData.temperature) },
                  ]}
                >
                  {weatherData.feelsLike.toFixed(2)}°F
                </Text>
              </Text>
            </View>
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
  locationContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  headingText: {
    fontSize: 28,
    fontWeight: "regular",
  },
  locationText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  locationSubText: {
    fontSize: 18,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    width: "100%",
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  weatherInfo: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

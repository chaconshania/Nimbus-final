import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import useWeather from "./hooks/UseWeather";
import determineColor from "./components/DetermineColor";
import IconButton from "./components/IconButton";
import HeaderButtons from "./components/HeaderButtons";

export default function App() {
  const [city, setCity] = useState("");
  const [preferences, setPreferences] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    weatherData,
    loading,
    error,
    fetchWeatherForCurrentLocation,
    getWeather,
  } = useWeather(setCity);

  useEffect(() => {
    const loadPreferences = async () => {
      const saved = await AsyncStorage.getItem("userPreferences");
      if (saved) setPreferences(JSON.parse(saved));
    };
    loadPreferences();
  }, []);

  useEffect(() => {
    fetchWeatherForCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      {!showSettings ? (
        <>
          <HeaderButtons
            onSearchPress={() => setShowModal(true)}
            onSettingsPress={() => setShowSettings(true)}
          />
          <Home
            city={city}
            setCity={setCity}
            getWeather={() => getWeather(city)}
            loading={loading}
            error={error}
            weatherData={weatherData}
            preferences={preferences}
            determineColor={(temp) => determineColor(temp, preferences)}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </>
      ) : (
        <SettingsScreen
          preferences={preferences}
          setPreferences={setPreferences}
          setShowSettings={setShowSettings}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  settingButton: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-start",
  },
});

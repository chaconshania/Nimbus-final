import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import { API_KEY } from "./utilities/WeatherApi";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preferences, setPreferences] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const loadPreferences = async () => {
      const savedPreferences = await AsyncStorage.getItem("userPreferences");
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    };
    loadPreferences();
  }, []);

  useEffect(() => {
    fetchWeatherForCurrentLocation();
  }, []);

  const fetchWeatherForCurrentLocation = async () => {
    setLoading(true);
    setError("");

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await axios.get(
        `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`
      );

      const data = response.data;

      const weatherInfo = {
        city: data.city, //get the city
        condition: data.condition.description, //the weather conditions. maybe add

        temperature: data.temperature.current,
        feelsLike: data.temperature.feels_like,
      };

      setWeatherData(weatherInfo);
      setCity(data.city);
    } catch (err) {
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const getWeather = async () => {
    if (city.trim() === "") return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}`
      );

      const data = response.data;

      const weatherInfo = {
        city: data.city,
        condition: data.condition.description,
        iconUrl: data.condition.icon_url,
        temperature: data.temperature.current,
        feelsLike: data.temperature.feels_like,
      };

      setWeatherData(weatherInfo);
    } catch (err) {
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const determineColor = (temp) => {
    if (!preferences) return "black";

    const tooCold = parseFloat(preferences.tooColdTemp);
    const tooWarm = parseFloat(preferences.tooWarmTemp);

    if (temp <= tooCold) return "#2B9CD9"; //blue
    if (temp >= tooWarm) return "#FF6868"; //red
    return "#FFB039"; //yellow
  };

  return (
    <View style={styles.container}>
      {!showSettings ? (
        <>
          <Home
            city={city}
            setCity={setCity}
            getWeather={getWeather}
            loading={loading}
            error={error}
            weatherData={weatherData}
            preferences={preferences}
            determineColor={determineColor}
          />
          <Button title="Settings" onPress={() => setShowSettings(true)} />
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
});

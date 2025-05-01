import { useState } from "react";
import axios from "axios";
import * as Location from "expo-location";
import { API_KEY } from "../utilities/WeatherApi";

export default function UseWeather(setCity) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherForCurrentLocation = async () => {
    setLoading(true);
    setError("");

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Location permission denied");
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
        city: data.city,
        condition: data.condition.description,
        iconUrl: data.condition.icon_url,
        temperature: data.temperature.current,
        feelsLike: data.temperature.feels_like,
      };

      setWeatherData(weatherInfo);
      setCity(data.city);
    } catch (err) {
      setError("Error fetching weather");
    } finally {
      setLoading(false);
    }
  };

  const getWeather = async (city) => {
    if (!city.trim()) return;

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

  return {
    weatherData,
    loading,
    error,
    fetchWeatherForCurrentLocation,
    getWeather,
  };
}

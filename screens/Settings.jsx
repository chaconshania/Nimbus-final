import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen({
  setShowSettings,
  preferences,
  setPreferences,
}) {
  const [tooColdTemp, setTooColdTemp] = useState("");
  const [tooWarmTemp, setTooWarmTemp] = useState("");

  useEffect(() => {
    if (preferences) {
      setTooColdTemp(preferences.tooColdTemp || "");
      setTooWarmTemp(preferences.tooWarmTemp || "");
    }
  }, [preferences]);

  const savePreferences = async () => {
    const updatedPreferences = {
      tooColdTemp,
      tooWarmTemp,
    };

    await AsyncStorage.setItem(
      "userPreferences",
      JSON.stringify(updatedPreferences)
    );
    setPreferences(updatedPreferences);

    Alert.alert("Saved!", "Your preferences have been updated.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.title}>Settings</Text>

        <Text style={styles.label}>Too Cold Temperature (°):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tooColdTemp}
          onChangeText={setTooColdTemp}
          placeholder="Enter number"
        />

        <Text style={styles.label}>Too Warm Temperature (°):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tooWarmTemp}
          onChangeText={setTooWarmTemp}
          placeholder="Enter number"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={savePreferences} />

        {/* Go Back Button */}
        <Button title="Go Back" onPress={() => setShowSettings(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
  },
  settingsContainer: {
    display: "flex",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    paddingLeft: 10,
    marginTop: 5,
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.settingsContainer}>
          <Text style={styles.title}>Settings</Text>
          <View style={[styles.coldContainer]}>
            <Text style={styles.label}>Too Cold Temperature (°):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={tooColdTemp}
              onChangeText={setTooColdTemp}
              placeholder="Enter number"
            />
          </View>
          <View style={[styles.warmContainer]}>
            <Text style={styles.label}>Too Warm Temperature (°):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={tooWarmTemp}
              onChangeText={setTooWarmTemp}
              placeholder="Enter number"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={savePreferences}
          >
            <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setShowSettings(false)}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
    fontSize: 32,
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
  button: {
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },

  saveButton: {
    backgroundColor: "#1F1F1F",
  },

  cancelButton: {
    backgroundColor: "#E2E2E2",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  saveButtonText: {
    color: "white",
  },

  cancelButtonText: {
    color: "#5E5E5E",
  },
});

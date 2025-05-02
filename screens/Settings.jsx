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
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";

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
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={2}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Personalize your app by inputting your temperature preferences...{" "}
        </Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Too Cold Temperature (°):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={tooColdTemp}
            onChangeText={setTooColdTemp}
            placeholder="Enter number"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Too Warm Temperature (°):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={tooWarmTemp}
            onChangeText={setTooWarmTemp}
            placeholder="Enter number"
          />
        </View>
        <View style={styles.horizontalLine}></View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton title="Save" onPress={savePreferences} type="primary" />
        <CustomButton
          title="Go Back"
          onPress={() => setShowSettings(false)}
          type="secondary"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalLine: {
    backgroundColor: "#E2E2E2",
    width: "100%",
    height: 2,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 25,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

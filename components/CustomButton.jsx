import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress, type = "primary" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "primary" ? styles.primary : styles.secondary,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          type === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  primary: {
    backgroundColor: "#1F1F1F",
  },
  secondary: {
    backgroundColor: "#E2E2E2",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "#5E5E5E",
  },
});

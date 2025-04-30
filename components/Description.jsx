import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Description() {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text>You should wear a coat...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

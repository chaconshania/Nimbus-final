import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";

export default function HeaderButtons({ onSearchPress, onSettingsPress }) {
  return (
    <View style={styles.container}>
      <IconButton iconName="settings-outline" onPress={onSettingsPress} />
      <IconButton iconName="search" onPress={onSearchPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SearchModal({
  visible,
  onClose,
  city,
  setCity,
  getWeather,
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            <View style={styles.slider}></View>
            <Text style={styles.modalTitle}>Search city</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter a city"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.searchButton]}
              onPress={getWeather}
            >
              <Text style={[styles.buttonText, styles.searchButtonText]}>
                Search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, styles.cancelButtonText]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  searchButtonText: { color: "white" },
  modalBackground: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    marginTop: 60,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    width: "90%",
    padding: 10,
    justifyContent: "space-between",
  },
  content: {
    marginTop: 20,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 100,
    width: "100%",
    paddingLeft: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: "#1F1F1F",
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: "#E2E2E2",
  },
  cancelButtonText: {
    color: "#5E5E5E",
  },
  button: {
    height: 50,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
  },
  buttonRow: {
    paddingBottom: 30,
  },
  slider: {
    height: 5,
    backgroundColor: "#E2E2E2",
    width: 100,
    borderRadius: 100,
  },
});

import React from "react";

const settingsTemp = () => {
  return (
    <View>
      {" "}
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
  );
};

const styles = StyleSheet.create({});

export default settingsTemp;

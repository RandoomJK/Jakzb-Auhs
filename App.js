import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [stav, setStav] = useState(0);

  function handleOnPress() {
    setStav(stav + 1);
  }
  function handleMin() {
    setStav(stav - 1);
  }
  function handleReset() {
    setStav(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Počítadlo objednávok</Text>
      <Text style={stav >= 5 ? styles.textWarning : styles.textStavu}>{stav}</Text>
      <View style={styles.containerButtons}>
        <Button title="-" onPress={handleMin} disabled={stav === 0} />
        <Button title="+" onPress={handleOnPress} />
      </View>
      <Button title="Vynuluj" onPress={handleReset} />
      {stav >= 5 && <Text style={styles.textLimit}>Dosiahnnutý limit</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.67)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStavu: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textWarning: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  textLimit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
  },
  containerButtons: {
    flexDirection: "row",
    marginVertical: 20,
    borderRadius: 5,
    justifyContent: "space-between",
    gap: 10,
  },
});

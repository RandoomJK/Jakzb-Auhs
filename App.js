import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj úlohu..." />
        <Button title="ADD" />
      </View>

      <View style={styles.taskContainer}>
        <Text>Udalosti ::::::</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { paddingHorizontal: 10, flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" },
  taskContainer: { margin: 4, flex: 2, borderTopWidth: 3, padding: 24 },
  container: {
    flex: 1,
    backgroundColor: "rgba(248, 243, 242, 0.67)",
  },
  input: { borderWidth: 3, borderColor: "#d30303", borderRadius: 8, width: "80%" },
});

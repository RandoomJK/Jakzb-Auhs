import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Item from "./src/components/Item";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setInputText(text);
  }

  function handleAddItem() {
    setTaskList([...taskList, { title: inputText, done: false }]);
    setInputText("");
  }

  console.log(taskList);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputText} style={styles.input} placeholder="Zadaj úlohu..." />
        <Button onPress={handleAddItem} title="ADD" />
      </View>

      <FlatList data={taskList} renderItem={({ item }) => <Item title={item} />} keyExtractor={(item) => item.id} />
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

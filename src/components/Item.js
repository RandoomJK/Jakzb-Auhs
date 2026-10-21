import { Pressable, StyleSheet, Text } from "react-native";
export default function Item({ title }) {
  return (
    <Pressable style={styles.item}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 12,
    margin: 4,
  },
});

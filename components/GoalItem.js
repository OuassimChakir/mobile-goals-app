import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#ddd" }}
        style={ ({ pressed }) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

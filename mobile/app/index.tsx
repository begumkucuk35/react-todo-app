import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export default function index() {
  const [task, setTask] = useState<string>(""); // tasks in input
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      name: "Study lesson",
      completed: false,
    },
  ]); // todo list
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // Add the task
  const addTodo = (): void => {};

  // Delete the task
  const deleteTodo = (id: string): void => {};

  // Complete the task
  const toggleComplete = (id: string): void => {};

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <TextInput
          placeholder="Add a new task"
          placeholderTextColor="#777777"
          style={[styles.taskInput, isFocused && styles.taskInputFocused]}
          value={task}
          onChangeText={setTask}
          onFocus={() => setIsFocused(true)}
        />
        <TouchableOpacity onPress={addTodo}>
          <Image source={require("../assets/images/btn-add.svg")} />
        </TouchableOpacity>
      </View>

      <View>
        <Text>Tasks to do - {todos.filter((t) => !t.completed).length}</Text>
        <FlatList
          data={todos}
          keyExtractor={(item: Todo) => item.id}
          renderItem={({ item }: { item: Todo }) => (
            <View>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                <Image source={require("../assets/images/check.svg")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Image source={require("../assets/images/trash.svg")} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    flex: 1,
    padding: 20,
  },
  addContainer: {
    flexDirection: "row",
    gap: 10,
  },
  taskInput: {
    borderWidth: 2,
    borderColor: "#3e1671",
    paddingBlock: 0,
    paddingInline: 15,
    borderRadius: 10,
    backgroundColor: "transparent",
    height: 40,
    flex: 1,
    color: "#ffffff",
  },
  taskInputFocused: {
    borderColor: "#9e78cf",
    outlineWidth: 0,
  },
});

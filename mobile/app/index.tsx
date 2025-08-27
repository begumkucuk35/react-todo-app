import { useState } from "react";
import {
  Image,
  StyleSheet,
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
          style={styles.taskInput}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={addTodo}>
          <Image source={require("../assets/images/btn-add.svg")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#1e1e1e',
    flex: 1,
  },
  addContainer:{
    flexDirection: 'row',
    gap: 10,
  },
  taskInput:{
    borderWidth:2,
    borderColor: '#3e1671',
    paddingBlock: 0,
    paddingInline: 15,
    borderRadius: 10,
    backgroundColor: 'transparent',
    height: 40,
    flex: 1,
    color: '#ffffff'
  }
});

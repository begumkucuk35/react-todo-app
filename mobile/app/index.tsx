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
    <View>
      <View>
        <TextInput
          placeholder="Add a task..."
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

const styles = StyleSheet.create({});

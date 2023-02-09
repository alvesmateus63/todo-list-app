import React, { useState } from "react";
import { ScrollView, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Task } from "./components/Task";
import {
  AddTaskArea,
  Container,
  TaskInput,
  TaskInputButton,
  Title,
} from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  return (
    <Container>
      <Title>Tarefas do dia</Title>
      <ScrollView>
        <Task />
      </ScrollView>
      <AddTaskArea>
        <TaskInput placeholder="Digite uma tarefa..." />
        <TaskInputButton>
          <Text style={{ fontSize: 30, color: "#fff" }}>+</Text>
        </TaskInputButton>
      </AddTaskArea>
    </Container>
  );
}

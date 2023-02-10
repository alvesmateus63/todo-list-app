import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, Keyboard } from "react-native";
import { Task } from "./components/Task";
import * as S from "./styles";

export default function App() {
  const [task, setTask] = useState<string | null>();
  const [taskItems, setTaskItems] = useState<string[] | [] | any>([]); // não sei oq por no lugar no any

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <S.Container>
      {/* Show task */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <S.TasksWrapper>
          <S.SectionTitle>Tarefas do dia</S.SectionTitle>
          <S.ItemsContainer>
            {taskItems != null
              ? taskItems.map((item: string, index: number) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Task taskTitle={item} />
                  </TouchableOpacity>
                ))
              : null}
            {}
          </S.ItemsContainer>
        </S.TasksWrapper>
      </ScrollView>

      {/* Add task */}
      <S.WriteTaskWrapper>
        <S.AddTaskInput
          placeholder={"Adicione uma tarefa"}
          value={task!} // Non-null assertion operator
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <S.AddWrapper>
            <Text style={{ color: "#fff" }}>+</Text>
          </S.AddWrapper>
        </TouchableOpacity>
      </S.WriteTaskWrapper>
    </S.Container>
  );
}

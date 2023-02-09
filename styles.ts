import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-itens: center;
  background-color: #ccc;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AddTaskArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const TaskInput = styled.TextInput`
  width: 250px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 60px;
`;

export const TaskInputButton = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #55bcf6;
  border-radius: 30px;
`;

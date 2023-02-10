import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #e8eaed;
`;

export const TasksWrapper = styled.View`
  padding-top: 80px;
  padding-horizontal: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ItemsContainer = styled.View`
  margin-top: 30px;
`;

export const WriteTaskWrapper = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const AddTaskInput = styled.TextInput`
  padding-vertical: 15px;
  padding-horizontal: 15px;
  background-color: #fff;
  border-radius: 60px;
  border-color: #c0c0c0;
  border-width: 1px;
  width: 250px;
`;

export const AddWrapper = styled.View`
  width: 60px;
  height: 60px;
  background-color: #55bcf6;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  border-color: #c0c0c0;
  border-width: 1px;
`;

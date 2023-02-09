import styled from "styled-components/native";

export const TaskContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export const TaskLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TaskSquare = styled.View`
  width: 24px;
  height: 24px;
  background-color: #55bcf6;
  border-radius: 5px;
  margin-right: 15px;
`;

export const TaskTitle = styled.Text`
  font-size: 14px;
`;

export const TaskCircle = styled.View`
  width: 12px;
  height: 12px;
  border: 2px solid #55bcf6;
  border-radius: 5px;
`;

import {
  TaskCircle,
  TaskContainer,
  TaskLeft,
  TaskSquare,
  TaskTitle,
} from "./styles";

export const Task = () => {
  return (
    <TaskContainer>
      <TaskLeft>
        <TaskSquare></TaskSquare>
        <TaskTitle>Passear com a iguana</TaskTitle>
      </TaskLeft>
      <TaskCircle></TaskCircle>
    </TaskContainer>
  );
};

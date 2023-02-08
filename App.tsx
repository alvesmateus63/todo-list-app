import { Task } from "./components/Task";
import { Container, Title } from "./styles";

export default function App() {
  return (
    <Container>
      <Title>Tarefas do dia</Title>
      <Task />
      <Task />
    </Container>
  );
}

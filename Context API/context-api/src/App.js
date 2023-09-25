import "./styles.css";
import Reuse from "./Reuse";
import Container from "./components/Container";
import ContainerFunc from "./components/ContainerFunc";


export default function App() {
  return (
    <div classname="App">
      <h1>Context API</h1>
      <Container />
      <ContainerFunc />
    </div>
  );
}

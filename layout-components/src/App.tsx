import SpliScreen from "./SpliScreen";

const Left = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left</h1>;
};

const Right = () => {
  return <p style={{ backgroundColor: "blue" }}>Right</p>;
};

function App() {
  return <SpliScreen left={<Left />} right={<Right />} />;
}

export default App;

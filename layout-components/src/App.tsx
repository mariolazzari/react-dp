import SpliScreen from "./SpliScreen";

const Left = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left</h1>;
};

const Right = () => {
  return <p style={{ backgroundColor: "blue" }}>Right</p>;
};

function App() {
  return (
    <SpliScreen leftWeight={1} rightWeight={5}>
      {{
        left: <Left />,
        right: <Right />,
      }}
    </SpliScreen>
  );
}

export default App;

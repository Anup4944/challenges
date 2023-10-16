import "./App.css";
import CountryCapitalGame from "./components/CountryCapitalGame";

function App() {
  return (
    <div className="App">
      <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
    </div>
  );
}

export default App;

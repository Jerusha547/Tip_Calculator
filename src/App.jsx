import "./styles.css";
import TipCalculator from "./components/TipCalculator";
import Heading from "./components/Heading";

export default function App() {
  return (
    <>
      <div className="head">
        <Heading />
      </div>
      <div className="App">
        <TipCalculator />
      </div>
    </>
  );
}

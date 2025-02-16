import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const tip =
    (Number(percent1) / 100) * Number(bill) +
    (Number(percent2) / 100) * Number(bill);

  function reset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percent={percent1} setPercent={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percent2} setPercent={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset reset={reset} bill={bill} />
    </div>
  );
}

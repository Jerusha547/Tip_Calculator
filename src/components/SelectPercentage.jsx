import PropTypes from "prop-types";
export default function SelectPercentage({ children, percent, setPercent }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Okay! (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
SelectPercentage.propTypes = {
  children: PropTypes.node.isRequired,
  percent: PropTypes.number.isRequired,
  setPercent: PropTypes.func.isRequired,
};

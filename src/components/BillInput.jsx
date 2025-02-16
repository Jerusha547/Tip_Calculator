import PropTypes from "prop-types";
export default function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        className="input"
        type="text"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
BillInput.propTypes = {
  bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setBill: PropTypes.func.isRequired,
};

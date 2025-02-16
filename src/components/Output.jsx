import PropTypes from "prop-types";
export default function Output({ bill, tip }) {
  return (
    <div>
      {Number(bill) > 0 && (
        <h1>You pay ₹{(Number(bill) + Number(tip)).toFixed(2)}</h1>
      )}
    </div>
  );
}
Output.propTypes = {
  bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tip: PropTypes.number.isRequired,
};

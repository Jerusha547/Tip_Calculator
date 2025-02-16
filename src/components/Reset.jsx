import PropTypes from "prop-types";
export default function Reset({ reset, bill }) {
  return <div>{bill > 0 && <button onClick={reset}>RESET</button>}</div>;
}
Reset.propTypes = {
  reset: PropTypes.func.isRequired,
  bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

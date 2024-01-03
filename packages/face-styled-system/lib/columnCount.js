import PropTypes from "prop-types";
const columnCount = ({ columnCount }) => (columnCount ? { columnCount } : {});
columnCount.propTypes = { cursor: PropTypes.number };
export default columnCount;

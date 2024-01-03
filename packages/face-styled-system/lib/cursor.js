import PropTypes from "prop-types";
const cursor = ({ cursor }) => (cursor ? { cursor } : {});
cursor.propTypes = { cursor: PropTypes.string };
export default cursor;

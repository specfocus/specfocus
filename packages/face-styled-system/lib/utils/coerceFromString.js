const coerceFromString = (val) => (typeof val === 'string' ? [val] : val);
export default coerceFromString;

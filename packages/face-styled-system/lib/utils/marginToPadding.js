const marginToPadding = (rules) => {
    const out = {};
    for (let key in rules) {
        if (!(typeof rules[key] === 'number')) {
            out[key] = marginToPadding(rules[key]);
        }
        else if (key.startsWith('margin')) {
            out[`padding${key.slice(6)}`] = rules[key] < 0 ? 0 : rules[key];
        }
        else {
            out[key] = rules[key];
        }
    }
    return out;
};
export default marginToPadding;

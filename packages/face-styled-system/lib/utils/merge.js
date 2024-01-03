const merge = (a, b) => {
    return Object.assign({}, a, b, Object.keys(b || {}).reduce((obj, key) => {
        // Using a temporary object to hold the merged values
        let mergedValues = {};
        mergedValues[key] = a[key] !== null && typeof a[key] === 'object'
            ? merge(a[key], b[key])
            : b[key];
        return Object.assign(obj, mergedValues);
    }, {}));
};
export default merge;

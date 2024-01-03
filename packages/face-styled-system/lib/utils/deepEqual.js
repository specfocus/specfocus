const deepEqual = (obj1, obj2) => {
    if (obj1 == null && obj2 == null) {
        return true;
    }
    if (obj1 == null || obj2 == null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (!keys1 && !keys2) {
        return true;
    }
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let i in keys1) {
        const value1 = obj1[keys1[i]];
        const value2 = obj2[keys1[i]];
        let equals;
        if (typeof value1 === 'object' || typeof value2 == 'object') {
            equals = deepEqual(value1, value2);
        }
        else {
            equals = value1 === value2;
        }
        if (!equals) {
            return false;
        }
    }
    return true;
};
export default deepEqual;

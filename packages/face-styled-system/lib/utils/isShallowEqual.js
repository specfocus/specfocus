const isShallowEqual = (objA, objB) => {
    if (!objA) {
        return objA === objB;
    }
    if (!objB) {
        return objA === objB;
    }
    if (objA === objB) {
        return true;
    }
    for (let i in objA) {
        if (!(i in objB)) {
            return false;
        }
    }
    for (let i in objB) {
        if (objA[i] !== objB[i]) {
            return false;
        }
    }
    return true;
};
export default isShallowEqual;

import merge from "./merge";
const mergeAll = (...args) => {
    let result = {};
    for (let i = 0; i < args.length; i++) {
        result = merge(result, args[i]);
    }
    return result;
};
export default mergeAll;

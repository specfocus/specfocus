const mapObj = (fn, obj) => {
    const out = {};
    let i = 0;
    for (let key in obj) {
        out[key] = fn(obj[key], key, i);
        i++;
    }
    return out;
};
export default mapObj;

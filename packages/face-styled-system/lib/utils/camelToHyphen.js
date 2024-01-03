const camelToHyphen = (camelStr) => camelStr.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
export default camelToHyphen;

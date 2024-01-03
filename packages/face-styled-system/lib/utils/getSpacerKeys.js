var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import coerceFromString from "./coerceFromString";
const hasMtProp = ({ marginTop, mt, my, m, margin }) => marginTop || mt || my || m || margin;
const hasMbProp = ({ marginBottom, mb, my, m, margin }) => marginBottom || mb || my || m || margin;
export const getSpacerKeys = (_a) => {
    var { sa, sb, spaceAbove, spaceBelow } = _a, props = __rest(_a, ["sa", "sb", "spaceAbove", "spaceBelow"]);
    return ({
        spaceAbove: hasMtProp(props) ? null : coerceFromString(sa || spaceAbove),
        spaceBelow: hasMbProp(props) ? null : coerceFromString(sb || spaceBelow)
    });
};

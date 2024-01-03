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
/**
 * HOF that will transform a css object by taking its `paddingLeft` and
 * `paddingRight` properties and wrapping them in a `:not(:first-child)`
 * or `:not(:last-child)` block, to ensure that text flows from and up to
 * the very edge of the table margin
 *
 * @example
 * import styled from 'styled-components';
 * import { space } from 'styled-system';
 *
 * const Foo = styled('div')(innerPaddingX(space));
 */
const innerPaddingX = (css) => {
    let { paddingLeft, paddingRight } = css, rest = __rest(css, ["paddingLeft", "paddingRight"]);
    if (paddingLeft) {
        rest[':not(:first-child)'] = { paddingLeft };
    }
    if (paddingRight) {
        rest[':not(:last-child)'] = { paddingRight };
    }
    return rest;
};
export default innerPaddingX;

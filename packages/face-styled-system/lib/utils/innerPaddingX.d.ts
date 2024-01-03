import { type StyledObject } from "styled-components/dist/types";
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
declare const innerPaddingX: (css: StyledObject) => StyledObject;
export default innerPaddingX;
//# sourceMappingURL=innerPaddingX.d.ts.map
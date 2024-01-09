import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@specfocus/styledstyled-system/lib/Box";
import Grid from "./Grid";
export default { title: 'Grid' };
export const gridOverview = () => (_jsxs(Grid, { gridTemplateColumns: ['minmax(0, 1fr)', '210px minmax(0, 1fr)'], gridColumnGap: "35px", width: "100%", children: [_jsx(Box, { p: "20px", bg: "hotpink", textStyle: "bodyRegular", children: "Nav column" }), _jsx(Box, { p: "20px", bg: "rebeccapurple", color: "white", textStyle: "bodyRegular", children: "Content column" })] }));

import { jsx as _jsx } from "react/jsx-runtime";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
const renderWithTheme = (Component, theme) => {
    return renderer.create(_jsx(ThemeProvider, { theme: theme, children: Component }));
};
export default renderWithTheme;

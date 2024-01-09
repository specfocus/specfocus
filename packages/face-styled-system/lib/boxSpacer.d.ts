import { type PropsWithTheme } from "@specfocus/styledstyled-system/lib/theme";
import PropTypes from "prop-types";
import { type StyledObject } from "styled-components";
import { type SystemBoxProps } from "./Box/types";
declare const boxSpacer: {
    ({ theme, ...props }: PropsWithTheme<SystemBoxProps>): StyledObject;
    propTypes: {
        sa: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        sb: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        spaceAbove: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        spaceBelow: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
    };
};
export default boxSpacer;
//# sourceMappingURL=boxSpacer.d.ts.map
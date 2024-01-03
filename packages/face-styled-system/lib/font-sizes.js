import TEXT_STYLES from "./text-styles";
export const FONT_SIZES = [11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 34, 41, 64]; // px
const fontSizes = {
    0: FONT_SIZES[0],
    1: FONT_SIZES[1],
    2: FONT_SIZES[2],
    3: FONT_SIZES[3],
    4: FONT_SIZES[4],
    5: FONT_SIZES[5],
    6: FONT_SIZES[6],
    7: FONT_SIZES[7],
    8: FONT_SIZES[8],
    9: FONT_SIZES[9],
    10: FONT_SIZES[10],
    11: FONT_SIZES[11],
    12: FONT_SIZES[12],
    [TEXT_STYLES.BODY_XS]: FONT_SIZES[0],
    [TEXT_STYLES.BODY_SMALL]: FONT_SIZES[1],
    [TEXT_STYLES.BODY_SMALL_EMPH]: FONT_SIZES[1],
    [TEXT_STYLES.BODY_SMALL_REGULAR]: FONT_SIZES[1],
    // regular body size for md and lg viewports
    [TEXT_STYLES.BODY]: FONT_SIZES[2],
    [TEXT_STYLES.BODY_REGULAR]: FONT_SIZES[2],
    // all heading sizes are not strictly for the html elements matching their name;
    // an <h2> would be fontSizes.h2 in a default context, but in different viewports
    // or contexts, the <h2> might be h5 size, while still semantically valid.
    [TEXT_STYLES.H6]: FONT_SIZES[3],
    // standard body size for sm viewports
    // TODO: BODY_BP_SM is deprecated and should be removed when 2.0.0 will go live
    [TEXT_STYLES.BODY_BP_SM]: FONT_SIZES[4],
    [TEXT_STYLES.BODY_VIEW_S]: FONT_SIZES[4],
    [TEXT_STYLES.H5]: FONT_SIZES[4],
    // in for completeness
    [TEXT_STYLES.EMAIL_BODY]: FONT_SIZES[5],
    // stand-alone menu list item
    [TEXT_STYLES.MENU_LIST_ITEM]: FONT_SIZES[6],
    [TEXT_STYLES.H4]: FONT_SIZES[7],
    [TEXT_STYLES.H3]: FONT_SIZES[8],
    [TEXT_STYLES.H2]: FONT_SIZES[9],
    [TEXT_STYLES.H1]: FONT_SIZES[10],
    [TEXT_STYLES.H1_ELEVATED]: FONT_SIZES[12],
    [TEXT_STYLES.KPI]: FONT_SIZES[11],
};
export default fontSizes;

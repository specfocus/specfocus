/// <reference types="react" />
declare const TEXT_STYLES: {
    readonly BODY_XS: "bodyXs";
    readonly BODY_REGULAR: "bodyRegular";
    readonly BODY_SMALL: "bodySmall";
    readonly BODY_SMALL_EMPH: "bodySmallEmph";
    readonly BODY_SMALL_REGULAR: "bodySmallRegular";
    readonly BODY: "body";
    readonly BODY_BP_SM: "bodyBpSm";
    readonly BODY_VIEW_S: "bodyViewS";
    readonly MENU_LIST_ITEM: "menuListItem";
    readonly EMAIL_BODY: "emailBody";
    readonly KPI: "kpi";
    readonly H6: "h6";
    readonly H5: "h5";
    readonly H4: "h4";
    readonly H3: "h3";
    readonly H2: "h2";
    readonly H1: "h1";
    readonly H1_ELEVATED: "h1Elevated";
};
export interface StyleVariant extends React.CSSProperties {
    '-webkit-font-smoothing': string;
    '-moz-osx-font-smoothing': string;
    fontFamily: string;
    fontSize: string;
    fontWeight?: number | string;
    letterSpacing: string;
    lineHeight: string;
    em: {
        fontStyle: 'italic';
    };
    strong?: Partial<Omit<StyleVariant, 'em' | 'fontFamily' | 'strong'>>;
}
export type TextStyle = typeof TEXT_STYLES[keyof typeof TEXT_STYLES];
export type TextStyles = Partial<Record<TextStyle | 'bodyBpSmRegular' | 'bodyBpSmEmph', Partial<StyleVariant>>>;
export default TEXT_STYLES;
//# sourceMappingURL=text-styles.d.ts.map
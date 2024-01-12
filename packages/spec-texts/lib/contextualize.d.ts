export declare enum TextBreakpoints {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg"
}
export type GenderTextVariants = {
    f: string;
    m: string;
    n?: string;
};
export type ResponsiveTextValue = string | GenderTextVariants;
export type ResponsiveText = {
    xs?: ResponsiveTextValue;
    sm?: ResponsiveTextValue;
    md?: ResponsiveTextValue;
    lg?: ResponsiveTextValue;
};
export type Textual = string | ResponsiveText;
export type PluralityTextOptions = [Textual, Textual, Textual?];
export type TextualVariation = Textual | PluralityTextOptions;
export type TextVariables = Array<(string | {
    [k: string]: any;
})>;
declare const contextualize: (text: TextualVariation, variant?: TextBreakpoints, ...vars: TextVariables) => string;
export default contextualize;

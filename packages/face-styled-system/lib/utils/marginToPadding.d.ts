/**
 * Transform output from boxSpacer and minTextMargins to apply to
 * padding instead of margin, useful for links and hover areas.
 *
 * Warning: negative padding isn't valid, so padding must be greater
 * than 8px to space all text styles correctly, or greater than 4px
 * to space body styles correctly.
 */
export type StyleRules = Record<string, any>;
declare const marginToPadding: (rules: StyleRules) => StyleRules;
export default marginToPadding;
//# sourceMappingURL=marginToPadding.d.ts.map
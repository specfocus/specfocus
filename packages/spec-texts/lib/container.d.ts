import { ModuleEntriesContainer } from "@specfocus/spec-entries/lib/container";
import { TextualVariation } from "./contextualize";
import { type Entry } from "@specfocus/spec-entries/lib/entry";
export type TextualEntry = Entry<TextualVariation>;
export declare class TextualContainer {
    readonly lang: string;
    readonly parent?: TextualContainer;
    readonly internal: ModuleEntriesContainer;
    constructor(root: string, separator: string, lang: string, parent?: TextualContainer);
    get: (moniker: string) => Promise<TextualVariation>;
}

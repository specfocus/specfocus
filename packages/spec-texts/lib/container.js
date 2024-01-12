"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextualContainer = void 0;
const container_1 = require("@specfocus/spec-entries/lib/container");
class TextualContainer {
    constructor(root, separator, lang, parent) {
        this.lang = lang;
        this.parent = parent;
        this.get = async (moniker) => {
            const parts = moniker.split(this.internal.separator);
            const key = parts.pop();
            parts.unshift(this.lang);
            const mon2 = parts.join(this.internal.separator);
            const entries = await this.internal.get(mon2)
                .catch(() => this.parent?.internal?.get(mon2) ?? []);
            const entry = entries.find(([k]) => k === key);
            if (!entry)
                return key ?? '<missing key>';
            const [, value] = entry;
            return value;
        };
        this.internal = new container_1.ModuleEntriesContainer(root, separator);
    }
}
exports.TextualContainer = TextualContainer;
//# sourceMappingURL=container.js.map
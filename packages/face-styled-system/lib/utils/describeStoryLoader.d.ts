import { Page } from "puppeteer";
declare global {
    var page: Page;
}
declare const describeStoryLoader: (name: string, storyID: string, func: () => void) => void;
export default describeStoryLoader;
//# sourceMappingURL=describeStoryLoader.d.ts.map
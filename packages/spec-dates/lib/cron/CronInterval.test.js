"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CronObjectSpec_1 = require("./CronObjectSpec");
describe('cron-interval', function () {
    it('should recognize', function () {
        expect((0, CronObjectSpec_1.isCronInterval)([CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, 1, 6], 2])).toBe(true);
        expect((0, CronObjectSpec_1.isCronInterval)([CronObjectSpec_1.CRON_INTERVAL, 5, 2])).toBe(true);
    });
});

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enumify_1 = require("./Enumify");
describe('enumify', function () {
    it('Color: basic features', function () {
        var e_1, _a;
        var Color = /** @class */ (function (_super) {
            __extends(Color, _super);
            function Color() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Color.red = new Color();
            Color.orange = new Color();
            Color.yellow = new Color();
            Color.green = new Color();
            Color.blue = new Color();
            Color.purple = new Color();
            Color._ = Color.end();
            return Color;
        }(Enumify_1.Enumify));
        // Instance properties
        expect(Color.red.value).toBe('red');
        expect(Color.red.index).toBe(0);
        // Prototype methods
        expect('Color: ' + Color.red // .toString()
        ).toBe('Color: Color.red');
        // Static `.values` and static `.items`
        expect(Color.values).toEqual(['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
        expect(Color.items).toEqual([Color.red, Color.orange, Color.yellow, Color.green, Color.blue, Color.purple]);
        // Static `.enumValueOf()`
        expect(Color.itemOf('yellow')).toBe(Color.yellow);
        // Iterability
        var result = [];
        var iterated = __spreadArray([], __read(Color), false);
        try {
            for (var Color_1 = __values(Color), Color_1_1 = Color_1.next(); !Color_1_1.done; Color_1_1 = Color_1.next()) {
                var c = Color_1_1.value;
                result.push('Color: ' + c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (Color_1_1 && !Color_1_1.done && (_a = Color_1.return)) _a.call(Color_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        expect(iterated).toEqual([Color.red, Color.orange, Color.yellow, Color.green, Color.blue, Color.purple]);
    });
    it('Instance properties', function () {
        var Weekday = /** @class */ (function (_super) {
            __extends(Weekday, _super);
            function Weekday(isWorkDay) {
                var _this = _super.call(this) || this;
                _this.isWorkDay = isWorkDay;
                return _this;
            }
            Weekday.monday = new Weekday(true);
            Weekday.tuesday = new Weekday(true);
            Weekday.wednesday = new Weekday(true);
            Weekday.thursday = new Weekday(true);
            Weekday.friday = new Weekday(true);
            Weekday.saturday = new Weekday(false);
            Weekday.sunday = new Weekday(false);
            Weekday._ = Weekday.end();
            return Weekday;
        }(Enumify_1.Enumify));
        expect(Weekday.sunday.isWorkDay).toBe(false);
        expect(Weekday.wednesday.isWorkDay).toBe(true);
    });
    it('switch', function () {
        var Weekday = /** @class */ (function (_super) {
            __extends(Weekday, _super);
            function Weekday() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Weekday.monday = new Weekday();
            Weekday.tuesday = new Weekday();
            Weekday.wednesday = new Weekday();
            Weekday.thursday = new Weekday();
            Weekday.friday = new Weekday();
            Weekday.saturday = new Weekday();
            Weekday.sunday = new Weekday();
            Weekday._ = Weekday.end();
            return Weekday;
        }(Enumify_1.Enumify));
        function nextDay(weekday) {
            switch (weekday) {
                case Weekday.monday:
                    return Weekday.tuesday;
                case Weekday.tuesday:
                    return Weekday.wednesday;
                case Weekday.wednesday:
                    return Weekday.thursday;
                case Weekday.thursday:
                    return Weekday.friday;
                case Weekday.friday:
                    return Weekday.saturday;
                case Weekday.saturday:
                    return Weekday.sunday;
                case Weekday.sunday:
                    return Weekday.monday;
                default:
                    throw new Error();
            }
        }
        expect(nextDay(Weekday.tuesday)).toBe(Weekday.wednesday);
        expect(nextDay(Weekday.sunday)).toBe(Weekday.monday);
    });
    it('Instance getters', function () {
        var Weekday = /** @class */ (function (_super) {
            __extends(Weekday, _super);
            function Weekday(props) {
                var _this = _super.call(this) || this;
                Object.defineProperties(_this, Object.getOwnPropertyDescriptors(props));
                return _this;
            }
            Weekday.monday = new Weekday({
                get nextDay() {
                    return Weekday.tuesday;
                },
            });
            Weekday.tuesday = new Weekday({
                get nextDay() {
                    return Weekday.wednesday;
                },
            });
            Weekday.wednesday = new Weekday({
                get nextDay() {
                    return Weekday.thursday;
                },
            });
            Weekday.thursday = new Weekday({
                get nextDay() {
                    return Weekday.friday;
                },
            });
            Weekday.friday = new Weekday({
                get nextDay() {
                    return Weekday.saturday;
                },
            });
            Weekday.saturday = new Weekday({
                get nextDay() {
                    return Weekday.sunday;
                },
            });
            Weekday.sunday = new Weekday({
                get nextDay() {
                    return Weekday.monday;
                },
            });
            Weekday._ = Weekday.end();
            return Weekday;
        }(Enumify_1.Enumify));
        expect(Weekday.friday.nextDay).toBe(Weekday.saturday);
        expect(Weekday.sunday.nextDay).toBe(Weekday.monday);
    });
    test('Arbitrary enum values', function () {
        var Mode = /** @class */ (function (_super) {
            __extends(Mode, _super);
            function Mode(n) {
                var _this = _super.call(this) || this;
                _this.n = n;
                return _this;
            }
            Mode.user_r = new Mode(256);
            Mode.user_w = new Mode(128);
            Mode.user_x = new Mode(64);
            Mode.group_r = new Mode(32);
            Mode.group_w = new Mode(16);
            Mode.group_x = new Mode(8);
            Mode.all_r = new Mode(4);
            Mode.all_w = new Mode(2);
            Mode.all_x = new Mode(1);
            Mode._ = Mode.end();
            return Mode;
        }(Enumify_1.Enumify));
        expect(Mode.user_r.n | Mode.user_w.n | Mode.user_x.n | Mode.group_r.n | Mode.group_x.n | Mode.all_r.n | Mode.all_x.n).toBe(493);
        expect(Mode.user_r.n | Mode.user_w.n | Mode.user_x.n | Mode.group_r.n).toBe(480);
    });
});
describe('Mode enumify example', function () {
    var Mode = /** @class */ (function (_super) {
        __extends(Mode, _super);
        function Mode(bitfield) {
            var _this = _super.call(this) || this;
            _this.bitfield = bitfield;
            return _this;
        }
        Mode.prototype.static = function () {
            Mode.end();
        };
        Mode.USER_R = new Mode(256);
        Mode.USER_W = new Mode(128);
        Mode.USER_X = new Mode(64);
        Mode.GROUP_R = new Mode(32);
        Mode.GROUP_W = new Mode(16);
        Mode.GROUP_X = new Mode(8);
        Mode.ALL_R = new Mode(4);
        Mode.ALL_W = new Mode(2);
        Mode.ALL_X = new Mode(1);
        return Mode;
    }(Enumify_1.Enumify));
    it('should do what is expected', function () {
        expect(Mode.USER_R.bitfield | Mode.USER_W.bitfield | Mode.USER_X.bitfield | Mode.GROUP_R.bitfield | Mode.GROUP_X.bitfield | Mode.ALL_R.bitfield | Mode.ALL_X.bitfield).toBe(493);
        expect(Mode.USER_R.bitfield | Mode.USER_W.bitfield | Mode.USER_X.bitfield | Mode.GROUP_R.bitfield).toBe(480);
    });
});
describe('State enumify example', function () {
    var State = /** @class */ (function (_super) {
        __extends(State, _super);
        function State(props) {
            var _this = _super.call(this) || this;
            Object.defineProperties(_this, Object.getOwnPropertyDescriptors(props));
            return _this;
        }
        State.prototype.accept = function (x) {
            throw new Error('Must be overridden');
        };
        State.start = new State({
            done: false,
            accept: function (x) {
                if (x === '1') {
                    return State.one;
                }
                else {
                    return State.start;
                }
            },
        });
        State.one = new State({
            done: false,
            accept: function (x) {
                if (x === '1') {
                    return State.two;
                }
                else {
                    return State.start;
                }
            },
        });
        State.two = new State({
            done: false,
            accept: function (x) {
                if (x === '1') {
                    return State.three;
                }
                else {
                    return State.start;
                }
            },
        });
        State.three = new State({
            done: true,
        });
        State._ = State.end();
        return State;
    }(Enumify_1.Enumify));
    function run(state, inputString) {
        var e_2, _a;
        var trace = [];
        try {
            for (var inputString_1 = __values(inputString), inputString_1_1 = inputString_1.next(); !inputString_1_1.done; inputString_1_1 = inputString_1.next()) {
                var ch = inputString_1_1.value;
                if (state.done) {
                    break;
                }
                state = state.accept(ch);
                trace.push("".concat(ch, " --> ").concat(state));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (inputString_1_1 && !inputString_1_1.done && (_a = inputString_1.return)) _a.call(inputString_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return trace;
    }
    it('run', function () {
        expect(run(State.start, '01011100')).toEqual([
            '0 --> State.start',
            '1 --> State.one',
            '0 --> State.start',
            '1 --> State.one',
            '1 --> State.two',
            '1 --> State.three',
        ]);
    });
});

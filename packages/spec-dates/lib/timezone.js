"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timezone = void 0;
var Timezone = /** @class */ (function () {
    function Timezone(hours, minutes) {
        var sign = Timezone.sign(hours, minutes);
        var total = hours < 0 ? hours * 60 + Math.abs(minutes) : hours * 60 + minutes;
        var abs = Math.abs(total);
        this.hours = (sign * Math.floor(abs / 60)) % 24;
        this.minutes = abs % 60;
        if (this.hours === 0) {
            this.minutes = sign * this.minutes;
        }
        var s = sign < 0 ? "-" : "+";
        var h = String(Math.abs(this.hours)).padStart(2, "0");
        var m = String(Math.abs(this.minutes)).padStart(2, "0");
        this.value = "".concat(s).concat(h, ":").concat(m);
    }
    Object.defineProperty(Timezone, "local", {
        get: function () {
            return new Timezone(0, new Date().getTimezoneOffset());
        },
        enumerable: false,
        configurable: true
    });
    Timezone.parse = function (tz) {
        var idx = tz.match(/^((?:Z|[+-])(?:2[0-3]|[01][0-9]):[0-5][0-9])$/)
            ? 4
            : tz.match(/^((?:Z|[+-])(?:2[0-3]|[01][0-9])[0-5][0-9])$/)
                ? 3
                : -1;
        if (idx === -1) {
            return new Timezone(0, 0);
        }
        var s = tz.substr(0, 1) === "-" ? -1 : 1;
        var h = parseInt(tz.substr(1, 2), 10);
        var m = parseInt(tz.substr(idx, 2), 10);
        if (h !== 0) {
            h *= s;
        }
        else {
            m *= s;
        }
        return new Timezone(h, m);
    };
    Timezone.sanitize = function (year, month, date, hours, minutes, seconds, milliseconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (milliseconds === void 0) { milliseconds = 0; }
        var d = new Date(Date.UTC(year, 0, 1));
        d.setMonth(month, date);
        d.setHours(hours, minutes, seconds, milliseconds);
        return d;
    };
    Timezone.sign = function (hours, minutes) {
        return hours !== 0 ? Math.sign(hours) : Math.sign(minutes);
    };
    Timezone.stringify = function (d) {
        var dt = [
            String(d.getFullYear()),
            String(d.getMonth() + 1).padStart(2, "0"),
            String(d.getDate()).padStart(2, "0"),
        ].join("-");
        var tm = [
            String(d.getHours()).padStart(2, "0"),
            String(d.getMinutes()).padStart(2, "0"),
            String(d.getSeconds()).padStart(2, "0"),
        ].join(":");
        var ms = String(d.getMilliseconds()).padStart(3, "0").substr(0, 3);
        return "".concat(dt, "T").concat(tm, ".").concat(ms);
    };
    Timezone.prototype.format = function (d) {
        return Timezone.stringify(d) + this.value;
    };
    Timezone.prototype.utc = function (d) {
        return new Date(this.format(d));
    };
    return Timezone;
}());
exports.Timezone = Timezone;

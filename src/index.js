"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isValid = exports.getInformation = void 0;
var arabic_json_1 = __importDefault(require("./arabic.json"));
var english_json_1 = __importDefault(require("./english.json"));
var words = { "arabic": ["ذكر", "أنثى", arabic_json_1["default"]], "english": ["Male", "Female", english_json_1["default"]] };
function isValid(national_id) {
    var _a, _b, _c;
    if (national_id === void 0) { national_id = "0"; }
    var data = getInformation(national_id);
    if ([data.type, data.century, (_a = data.birthday) === null || _a === void 0 ? void 0 : _a.day, (_b = data.birthday) === null || _b === void 0 ? void 0 : _b.year, (_c = data.birthday) === null || _c === void 0 ? void 0 : _c.month, data.governorate].some(function (v) { return !v; }))
        return false;
    if (data.age && data.age < 0)
        return false;
    if (data.birthday && data.birthday.date && (Date.now() - (+new Date(data.birthday.date))) < 0)
        return false;
    else
        return true;
}
exports.isValid = isValid;
/*
    If you find it difficult to understand, please see me
    https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9#%D9%88%D8%B5%D9%81_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A
*/
function getInformation(national_id, lang) {
    if (national_id === void 0) { national_id = "0"; }
    if (lang === void 0) { lang = "english"; }
    var governorate = words[lang][2][Number(national_id.slice(7, 9))];
    var century = national_id.slice(0, 1) === "2" ? "19" : national_id.slice(0, 1) === "3" ? "20" : undefined;
    var year = century + national_id.slice(1, 3);
    var month = national_id.slice(3, 5);
    var day = national_id.slice(5, 7);
    var type = +national_id.slice(9, 13) % 2 == 0 ? words[lang][1] : words[lang][0];
    if ([type, day, year, month, governorate, century].some(function (v) { return !v; }))
        return { error: "Invalid national ID number: ".concat(national_id, ". Please enter the correct one") };
    return { type: type, century: century, age: new Date().getFullYear() - Number(year), national_id: national_id, birthday: { text: "".concat(year, "/").concat(month, "/").concat(day), date: new Date(+day, +month, +year), day: day, month: month, year: year }, governorate: governorate };
}
exports.getInformation = getInformation;
//# sourceMappingURL=index.js.map
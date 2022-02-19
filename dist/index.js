"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamsObj = void 0;
/**
 * 返回url中的参数对象
 */
function getParamsObj() {
    var paramsObj = {};
    if (window.location.search) {
        var paramsArr = window.location.search.substr(1).split('&');
        paramsArr.forEach(function (param) {
            var paramArr = param.split('=');
            paramsObj[paramArr[0]] = paramArr[1] || null;
        });
    }
    return paramsObj;
}
exports.getParamsObj = getParamsObj;

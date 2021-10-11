"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggleActiveHook = void 0;
var react_1 = require("react");
var useToggleActiveHook = function (activeStatus) {
    if (activeStatus === void 0) { activeStatus = false; }
    var _a = (0, react_1.useState)(activeStatus), active = _a[0], setActive = _a[1];
    return [active, setActive];
};
exports.useToggleActiveHook = useToggleActiveHook;
//# sourceMappingURL=index.js.map
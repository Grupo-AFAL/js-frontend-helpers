(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["frontendHelpers"] = factory();
	else
		root["frontendHelpers"] = factory();
})(window, function() {
return (window["webpackJsonpfrontendHelpers"] = window["webpackJsonpfrontendHelpers"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: currentRelativeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentRelativeUrl", function() { return currentRelativeUrl; });
const currentRelativeUrl = () => {
  return window.location.pathname + window.location.search
}


/***/ })

},[["./src/index.js","runtime~main"]]]);
});
//# sourceMappingURL=main.frontend-helpers.js.map
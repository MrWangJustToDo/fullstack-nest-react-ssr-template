"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "page-Baz";
exports.ids = ["page-Baz"];
exports.modules = {

/***/ "./src/client/pages/Baz.tsx":
/*!**********************************!*\
  !*** ./src/client/pages/Baz.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   getInitialState: () => (/* binding */ getInitialState),\n/* harmony export */   isStatic: () => (/* binding */ isStatic)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\n\n\n\n\nconst BazLazy = (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/*! import() */ \"src_client_component_index_ts\").then(__webpack_require__.bind(__webpack_require__, /*! @client/component */ \"./src/client/component/index.ts\")).then(({ LazyComponent }) => ({ default: LazyComponent })));\nfunction Index(props) {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, { children: \"Baz page\" }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Code, { children: [\n      props.foo,\n      \" page\"\n    ] }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BazLazy, {}) })\n  ] });\n}\nconst getInitialState = async ({ pathName }) => {\n  console.log(\"get initial state\", pathName);\n  await (0,_client_utils__WEBPACK_IMPORTED_MODULE_3__.delay)(2e3);\n  return { props: { foo: \"baz from getInitialState\" } };\n};\nconst isStatic = true;\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/pages/Baz.tsx?");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_client_component_index_ts";
exports.ids = ["src_client_component_index_ts"];
exports.modules = {

/***/ "./src/client/component/index.ts":
/*!***************************************!*\
  !*** ./src/client/component/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazyComponent: () => (/* reexport safe */ _LazyComponent__WEBPACK_IMPORTED_MODULE_0__.LazyComponent)\n/* harmony export */ });\n/* harmony import */ var _LazyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyComponent */ \"./src/client/component/LazyComponent.tsx\");\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/component/index.ts?");

/***/ }),

/***/ "./src/client/component/LazyComponent.tsx":
/*!************************************************!*\
  !*** ./src/client/component/LazyComponent.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazyComponent: () => (/* binding */ LazyComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LazyComponent = () => {\n  const { isOpen, onClose, onOpen } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: onOpen, children: \"Open Modal\" }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen, onClose, children: [\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, { children: [\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { children: \"Modal Title\" }),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, { children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eveniet ipsa maiores voluptate est ullam ratione vel eaque, tenetur dolores quibusdam numquam. Veritatis iste id repellat porro sint esse perspiciatis necessitatibus velit praesentium eos, autem earum libero, officiis dolor. Quae?\" }),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, { children: [\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, { colorScheme: \"blue\", mr: 3, onClick: onClose, children: \"Close\" }),\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: \"ghost\", children: \"Secondary Action\" })\n        ] })\n      ] })\n    ] })\n  ] });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/component/LazyComponent.tsx?");

/***/ })

};
;
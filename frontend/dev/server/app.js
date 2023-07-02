/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/pages lazy recursive ^\\.\\/.*$":
/*!*********************************************************************************************************************!*\
  !*** ./src/client/pages/ lazy ^\.\/.*$ chunkName: page-[request] prefetchOrder: 0 preloadOrder: 0 namespace object ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./\": [\n\t\t\"./src/client/pages/index.tsx\",\n\t\t\"page-\"\n\t],\n\t\"./404\": [\n\t\t\"./src/client/pages/404.tsx\",\n\t\t\"page-404\"\n\t],\n\t\"./404.tsx\": [\n\t\t\"./src/client/pages/404.tsx\",\n\t\t\"page-404\"\n\t],\n\t\"./Bar\": [\n\t\t\"./src/client/pages/Bar.tsx\",\n\t\t\"page-Bar\"\n\t],\n\t\"./Bar.tsx\": [\n\t\t\"./src/client/pages/Bar.tsx\",\n\t\t\"page-Bar\"\n\t],\n\t\"./Baz\": [\n\t\t\"./src/client/pages/Baz.tsx\",\n\t\t\"page-Baz\"\n\t],\n\t\"./Baz.tsx\": [\n\t\t\"./src/client/pages/Baz.tsx\",\n\t\t\"page-Baz\"\n\t],\n\t\"./Dynamic/:para\": [\n\t\t\"./src/client/pages/Dynamic/:para.tsx\",\n\t\t\"page-Dynamic-para\"\n\t],\n\t\"./Dynamic/:para.tsx\": [\n\t\t\"./src/client/pages/Dynamic/:para.tsx\",\n\t\t\"page-Dynamic-para\"\n\t],\n\t\"./Foo\": [\n\t\t\"./src/client/pages/Foo.tsx\",\n\t\t\"page-Foo\"\n\t],\n\t\"./Foo.tsx\": [\n\t\t\"./src/client/pages/Foo.tsx\",\n\t\t\"page-Foo\"\n\t],\n\t\"./Goo\": [\n\t\t\"./src/client/pages/Goo.tsx\",\n\t\t\"page-Goo\"\n\t],\n\t\"./Goo.tsx\": [\n\t\t\"./src/client/pages/Goo.tsx\",\n\t\t\"page-Goo\"\n\t],\n\t\"./I18n\": [\n\t\t\"./src/client/pages/I18n.tsx\",\n\t\t\"page-I18n\"\n\t],\n\t\"./I18n.tsx\": [\n\t\t\"./src/client/pages/I18n.tsx\",\n\t\t\"page-I18n\"\n\t],\n\t\"./index\": [\n\t\t\"./src/client/pages/index.tsx\",\n\t\t\"page-\"\n\t],\n\t\"./index.tsx\": [\n\t\t\"./src/client/pages/index.tsx\",\n\t\t\"page-\"\n\t],\n\t\"./newDir\": [\n\t\t\"./src/client/pages/newDir/index.tsx\",\n\t\t\"page-newDir\"\n\t],\n\t\"./newDir/\": [\n\t\t\"./src/client/pages/newDir/index.tsx\",\n\t\t\"page-newDir\"\n\t],\n\t\"./newDir/index\": [\n\t\t\"./src/client/pages/newDir/index.tsx\",\n\t\t\"page-newDir\"\n\t],\n\t\"./newDir/index.tsx\": [\n\t\t\"./src/client/pages/newDir/index.tsx\",\n\t\t\"page-newDir\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/client/pages lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/pages/_lazy_^\\.\\/.*$_chunkName:_page-%5Brequest%5D_prefetchOrder:_0_preloadOrder:_0_namespace_object?");

/***/ }),

/***/ "./src/client/common/LoadingBar/index.module.scss":
/*!********************************************************!*\
  !*** ./src/client/common/LoadingBar/index.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"loadingBar\": `index-module__loadingBar--ITbAO`\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/LoadingBar/index.module.scss?");

/***/ }),

/***/ "./src/client/hooks/index.ts":
/*!***********************************!*\
  !*** ./src/client/hooks/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEffectOnce: () => (/* reexport safe */ _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__.useEffectOnce),\n/* harmony export */   useGetInitialProps: () => (/* reexport safe */ _useGetInitialProps__WEBPACK_IMPORTED_MODULE_1__.useGetInitialProps),\n/* harmony export */   useIsMounted: () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_2__.useIsMounted),\n/* harmony export */   useLang: () => (/* reexport safe */ _useLang__WEBPACK_IMPORTED_MODULE_3__.useLang),\n/* harmony export */   useLoadingBar: () => (/* reexport safe */ _useLoadingBar__WEBPACK_IMPORTED_MODULE_4__.useLoadingBar),\n/* harmony export */   usePreLoad: () => (/* reexport safe */ _usePreLoad__WEBPACK_IMPORTED_MODULE_5__.usePreLoad)\n/* harmony export */ });\n/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ \"./src/client/hooks/useEffectOnce.ts\");\n/* harmony import */ var _useGetInitialProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetInitialProps */ \"./src/client/hooks/useGetInitialProps.ts\");\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsMounted */ \"./src/client/hooks/useIsMounted.ts\");\n/* harmony import */ var _useLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLang */ \"./src/client/hooks/useLang.ts\");\n/* harmony import */ var _useLoadingBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLoadingBar */ \"./src/client/hooks/useLoadingBar.ts\");\n/* harmony import */ var _usePreLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usePreLoad */ \"./src/client/hooks/usePreLoad.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/index.ts?");

/***/ }),

/***/ "./src/client/hooks/useEffectOnce.ts":
/*!*******************************************!*\
  !*** ./src/client/hooks/useEffectOnce.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEffectOnce: () => (/* binding */ useEffectOnce)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useEffectOnce = (fn) => {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fn();\n  }, []);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useEffectOnce.ts?");

/***/ }),

/***/ "./src/client/hooks/useGetInitialProps.ts":
/*!************************************************!*\
  !*** ./src/client/hooks/useGetInitialProps.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGetInitialProps: () => (/* binding */ useGetInitialProps)\n/* harmony export */ });\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\nconst useGetInitialProps = (pagePath) => {\n  const routerData = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state) => state.client.clientProps.data);\n  const propsKey = (0,_client_utils__WEBPACK_IMPORTED_MODULE_0__.preLoadPropsKey)(pagePath);\n  return routerData[propsKey];\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useGetInitialProps.ts?");

/***/ }),

/***/ "./src/client/hooks/useIsMounted.ts":
/*!******************************************!*\
  !*** ./src/client/hooks/useIsMounted.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIsMounted: () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = () => {\n  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setMounted(true);\n  }, []);\n  return mounted;\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useIsMounted.ts?");

/***/ }),

/***/ "./src/client/hooks/useLang.ts":
/*!*************************************!*\
  !*** ./src/client/hooks/useLang.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLang: () => (/* binding */ useLang)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _shared_store_reducer_client_clientLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/store/reducer/client/clientLang */ \"./src/shared/store/reducer/client/clientLang.ts\");\n/* harmony import */ var _shared_store_reducer_server_serverLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/store/reducer/server/serverLang */ \"./src/shared/store/reducer/server/serverLang.ts\");\n/* harmony import */ var _useLoadingStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLoadingStore */ \"./src/client/hooks/useLoadingStore.ts\");\n\n\n\n\n\nconst useLang = () => {\n  const dispatch = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n  const lang = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state) => state.client.clientLang.value);\n  const setLoading = (0,_useLoadingStore__WEBPACK_IMPORTED_MODULE_4__.useLoading)((state) => state.setLoading);\n  const changeLang = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useCallbackRef)((newLang) => {\n    if (lang !== newLang) {\n      Promise.resolve().then(() => setLoading(true)).then(() => dispatch((0,_shared_store_reducer_server_serverLang__WEBPACK_IMPORTED_MODULE_3__.serverLangAsyncAction)(newLang))).then(() => dispatch((0,_shared_store_reducer_client_clientLang__WEBPACK_IMPORTED_MODULE_2__.changeClientLang)(newLang))).then(() => setLoading(false));\n    }\n  });\n  return { lang, changeLang };\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useLang.ts?");

/***/ }),

/***/ "./src/client/hooks/useLoadingBar.ts":
/*!*******************************************!*\
  !*** ./src/client/hooks/useLoadingBar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLoadingBar: () => (/* binding */ useLoadingBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\n\n\nconst useLoadingBar = (props = {}) => {\n  const { height = 1.5, present = 0, loading } = props;\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({ present, height });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!loading) {\n      state.current.height = height;\n      state.current.present = present;\n    }\n  }, [loading, height, present]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (ref.current) {\n      const ele = ref.current;\n      if (loading) {\n        let count = 2;\n        let id;\n        const start = () => {\n          if (count > 0.33) {\n            count -= 0.04;\n          }\n          let next = (state.current.present || 0) + count;\n          next = next < 99.5 ? next : 99.5;\n          ele.style.cssText = `height: ${state.current.height}px;transform: scale(${next / 100}, 1);`;\n          state.current.present = next;\n          id = requestAnimationFrame(start);\n        };\n        id = requestAnimationFrame(start);\n        return () => cancelAnimationFrame(id);\n      } else {\n        (0,_client_utils__WEBPACK_IMPORTED_MODULE_1__.delay)(40, () => ele.style.transform = \"scale(1)\", \"loadingBar\").then(() => (0,_client_utils__WEBPACK_IMPORTED_MODULE_1__.delay)(80, () => ele.style.height = \"0px\", \"loadingBar\"));\n        return () => (0,_client_utils__WEBPACK_IMPORTED_MODULE_1__.cancel)(\"loadingBar\");\n      }\n    }\n  }, [loading]);\n  return { ref };\n};\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useLoadingBar.ts?");

/***/ }),

/***/ "./src/client/hooks/useLoadingStore.ts":
/*!*********************************************!*\
  !*** ./src/client/hooks/useLoadingStore.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLoading: () => (/* binding */ useLoading)\n/* harmony export */ });\n/* harmony import */ var reactivity_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactivity-store */ \"reactivity-store\");\n/* harmony import */ var reactivity_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactivity_store__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useLoading = (0,reactivity_store__WEBPACK_IMPORTED_MODULE_0__.createState)(\n  (0,reactivity_store__WEBPACK_IMPORTED_MODULE_0__.withActions)(() => ({ loading: false }), { generateActions: (state) => ({ setLoading: (s) => state.loading = s }) })\n);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/useLoadingStore.ts?");

/***/ }),

/***/ "./src/client/hooks/usePreLoad.ts":
/*!****************************************!*\
  !*** ./src/client/hooks/usePreLoad.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePreLoad: () => (/* binding */ usePreLoad)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _shared_store_reducer_client_clientProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/store/reducer/client/clientProps */ \"./src/shared/store/reducer/client/clientProps.ts\");\n/* harmony import */ var _useLoadingStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useLoadingStore */ \"./src/client/hooks/useLoadingStore.ts\");\n\n\n\n\n\n\n\nconst usePreLoad = ({ routes, preLoad }) => {\n  const isRedirect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useStore)();\n  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  const [query] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n  const setLoading = (0,_useLoadingStore__WEBPACK_IMPORTED_MODULE_6__.useLoading)((state) => state.setLoading);\n  const firstLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_shared__WEBPACK_IMPORTED_MODULE_4__.getIsP_CSR)() ? true : false);\n  const loadedPath = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"\");\n  const loadingPath = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"\");\n  const timer1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const timer2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const storeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(store);\n  const [loadedLocation, setLoadedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_shared__WEBPACK_IMPORTED_MODULE_4__.getIsP_CSR)() ? void 0 : { location, query });\n  loadingPath.current = `${location.pathname}?${query.toString()}`;\n  loadedPath.current = loadedLocation ? `${loadedLocation.location.pathname}?${loadedLocation.query.toString()}` : \"\";\n  storeRef.current = store;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (firstLoad.current) {\n      firstLoad.current = false;\n      return;\n    }\n    const isRedirectCurrentPath = isRedirect.current && isRedirect.current === `${location.pathname}?${query.toString()}`;\n    if (!isRedirectCurrentPath) {\n      setLoading(false);\n    }\n    if (loadedPath.current !== `${location.pathname}?${query.toString()}`) {\n      if (!isRedirectCurrentPath) {\n        timer1.current && clearTimeout(timer1.current);\n        timer1.current = null;\n        timer2.current && clearTimeout(timer2.current);\n        timer2.current = null;\n        timer1.current = setTimeout(() => {\n          setLoading(true);\n        }, 200);\n      }\n      const currentLoad = (location2, query2) => {\n        preLoad(routes, location2.pathname, query2, storeRef.current).then((config) => {\n          const currentLoadKey = `${location2.pathname}?${query2.toString()}`;\n          if (currentLoadKey === loadingPath.current) {\n            const { redirect, error, props } = config || {};\n            if (redirect) {\n              isRedirect.current = `${redirect.location.pathName}?${redirect.location.query?.toString()}`;\n            } else {\n              isRedirect.current = \"\";\n            }\n            if (error) {\n              console.error(error);\n              setLoading(false);\n            } else if (redirect) {\n              navigate(isRedirect.current);\n            } else {\n              timer2.current = setTimeout(() => {\n                timer1.current && clearTimeout(timer1.current);\n                timer1.current = null;\n                if (loadingPath.current === currentLoadKey) {\n                  props && storeRef.current.dispatch((0,_shared_store_reducer_client_clientProps__WEBPACK_IMPORTED_MODULE_5__.changeClientPropsSuccess)(props));\n                  setLoading(false);\n                  setLoadedLocation({ location: location2, query: query2 });\n                }\n              }, 50);\n            }\n          }\n        });\n      };\n      currentLoad(location, query);\n    }\n  }, [location, preLoad, routes, navigate, query, setLoading]);\n  return { loaded: loadedLocation };\n};\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/hooks/usePreLoad.ts?");

/***/ }),

/***/ "./src/client/router/dynamicRoutes.ts":
/*!********************************************!*\
  !*** ./src/client/router/dynamicRoutes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dynamicRouteConfig: () => (/* binding */ dynamicRouteConfig)\n/* harmony export */ });\nconst dynamicRouteConfig = [{ \"path\": \"/Bar\", \"componentPath\": \"Bar\" }, { \"path\": \"/Baz\", \"componentPath\": \"Baz\" }, { \"path\": \"/Foo\", \"componentPath\": \"Foo\" }, { \"path\": \"/Goo\", \"componentPath\": \"Goo\" }, { \"path\": \"/I18n\", \"componentPath\": \"I18n\" }, { \"path\": \"/\", \"componentPath\": \"index\" }, { \"path\": \"/Dynamic/:para\", \"componentPath\": \"Dynamic/:para\" }, { \"path\": \"/newDir/\", \"componentPath\": \"newDir/index\" }, { \"path\": \"/*\", \"componentPath\": \"404\" }];\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/router/dynamicRoutes.ts?");

/***/ }),

/***/ "./src/client/router/index.ts":
/*!************************************!*\
  !*** ./src/client/router/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allRoutes: () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_0__.allRoutes)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/client/router/routes.ts\");\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/router/index.ts?");

/***/ }),

/***/ "./src/client/router/routes.ts":
/*!*************************************!*\
  !*** ./src/client/router/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allRoutes: () => (/* binding */ allRoutes)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_common_AutoInjectProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @client/common/AutoInjectProps */ \"./src/client/common/AutoInjectProps.tsx\");\n/* harmony import */ var _client_common_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/common/Layout */ \"./src/client/common/Layout/index.tsx\");\n/* harmony import */ var _dynamicRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicRoutes */ \"./src/client/router/dynamicRoutes.ts\");\n\n\n\n\nconst baseRouter = {\n  preLoad: () => _client_common_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout,\n  element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((0,_client_common_AutoInjectProps__WEBPACK_IMPORTED_MODULE_1__.AutoInjectProps)(_client_common_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout), \"\"),\n  children: null\n};\nconst dynamicRoutes = _dynamicRoutes__WEBPACK_IMPORTED_MODULE_3__.dynamicRouteConfig.map((it) => ({\n  path: it.path,\n  preLoad: () => __webpack_require__(\"./src/client/pages lazy recursive ^\\\\.\\\\/.*$\")(`./${it.componentPath}`),\n  component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(\n    () => __webpack_require__(\"./src/client/pages lazy recursive ^\\\\.\\\\/.*$\")(`./${it.componentPath}`).then((module) => ({\n      default: (0,_client_common_AutoInjectProps__WEBPACK_IMPORTED_MODULE_1__.AutoInjectProps)(module.default, it.path)\n    }))\n  )\n})).map(({ path, component: Component, preLoad }) => ({\n  path,\n  preLoad,\n  element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component)\n}));\nbaseRouter.children = dynamicRoutes;\nconst allRoutes = [baseRouter];\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/router/routes.ts?");

/***/ }),

/***/ "./src/client/utils/delay.ts":
/*!***********************************!*\
  !*** ./src/client/utils/delay.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancel: () => (/* binding */ cancel),\n/* harmony export */   delay: () => (/* binding */ delay)\n/* harmony export */ });\nconst timeoutMap = {};\nconst rejectMap = {};\nconst keyMap = {};\nlet keyLength = 0;\nconst maxKeyLength = 200;\nconst cancel = (key) => {\n  if (timeoutMap[key]) {\n    const length = timeoutMap[key].length;\n    timeoutMap[key] = timeoutMap[key].map((id) => id && clearTimeout(id)).slice(length);\n    rejectMap[key] = rejectMap[key].map((reject) => reject && reject()).slice(length);\n  }\n  if (keyLength > maxKeyLength) {\n    const keys = Object.keys(keyMap).sort((key1, key2) => keyMap[key1] > keyMap[key2] ? 1 : -1);\n    for (const keyItem of keys) {\n      if (keyItem !== key && !rejectMap[keyItem].length) {\n        delete keyMap[keyItem];\n        delete timeoutMap[keyItem];\n        delete rejectMap[keyItem];\n        keyLength--;\n      }\n    }\n  }\n};\nconst delay = (time, action, key) => {\n  if (key === void 0) {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        resolve();\n      }, time);\n    }).then(() => {\n      if (action)\n        return action();\n    });\n  } else {\n    if (!(key in keyMap)) {\n      keyMap[key] = 1;\n      timeoutMap[key] = [];\n      rejectMap[key] = [];\n      keyLength++;\n    } else {\n      keyMap[key]++;\n    }\n    cancel(key);\n    return new Promise((resolve, reject) => {\n      rejectMap[key].push(reject);\n      timeoutMap[key].push(\n        setTimeout(() => {\n          resolve();\n        }, time)\n      );\n    }).then(() => {\n      if (action)\n        return action();\n    }).catch(() => void 0);\n  }\n};\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/utils/delay.ts?");

/***/ }),

/***/ "./src/client/utils/index.ts":
/*!***********************************!*\
  !*** ./src/client/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancel: () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_0__.cancel),\n/* harmony export */   delay: () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_0__.delay),\n/* harmony export */   initialStateWrapper: () => (/* reexport safe */ _preLoad__WEBPACK_IMPORTED_MODULE_1__.initialStateWrapper),\n/* harmony export */   preLoad: () => (/* reexport safe */ _preLoad__WEBPACK_IMPORTED_MODULE_1__.preLoad),\n/* harmony export */   preLoadPropsKey: () => (/* reexport safe */ _preLoad__WEBPACK_IMPORTED_MODULE_1__.preLoadPropsKey)\n/* harmony export */ });\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay */ \"./src/client/utils/delay.ts\");\n/* harmony import */ var _preLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preLoad */ \"./src/client/utils/preLoad.ts\");\n\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/utils/index.ts?");

/***/ }),

/***/ "./src/client/utils/preLoad.ts":
/*!*************************************!*\
  !*** ./src/client/utils/preLoad.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialStateWrapper: () => (/* binding */ initialStateWrapper),\n/* harmony export */   preLoad: () => (/* binding */ preLoad),\n/* harmony export */   preLoadPropsKey: () => (/* binding */ preLoadPropsKey)\n/* harmony export */ });\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction preLoad(routes, pathname, query, store) {\n  const branch = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, pathname) || [];\n  const relativePathname = pathname;\n  const promises = [];\n  branch.forEach(({ route, params, pathname: pathname2 }) => {\n    const match = { params, pathname: pathname2 };\n    promises.push(_preLoad({ route, store, match, query, relativePathname }));\n  });\n  return Promise.all(promises).then((val) => {\n    if (val.length) {\n      const allInitialProps = val.filter(Boolean).reduce((s, c) => {\n        if (!c) {\n          return s;\n        }\n        s.props = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(s.props, c.props);\n        s.page = (s.page || []).concat(c.page || []);\n        s.error = [s.error, c.error].filter(Boolean).join(\" || \");\n        s.redirect = c.redirect ? c.redirect : s.redirect;\n        return s;\n      }, {});\n      return allInitialProps;\n    }\n    return {\n      redirect: {\n        code: 301,\n        location: { pathName: \"/404\" }\n      }\n    };\n  });\n}\nconst preLoadPropsKey = (pathName) => `__preload-[${pathName}]-props__`;\nconst resolvePreLoadStateFunction = async ({ route }) => {\n  const preLoadStateArray = [];\n  if (route.getInitialState) {\n    preLoadStateArray.push(route.getInitialState);\n  }\n  if (route.preLoad) {\n    const component = await route.preLoad();\n    if (component[\"default\"]) {\n      const typedComponent = component[\"default\"];\n      if (typedComponent.getInitialState) {\n        preLoadStateArray.push(typedComponent.getInitialState);\n      }\n    }\n    if (component[\"getInitialState\"]) {\n      const typedComponent = component;\n      preLoadStateArray.push(typedComponent.getInitialState);\n    }\n  }\n  if (preLoadStateArray.length) {\n    return async ({ store, pathName, params, relativePathname, query }) => {\n      const propsKey = preLoadPropsKey(pathName);\n      const res = await Promise.all(\n        preLoadStateArray.map(\n          (fn) => Promise.resolve().then(() => fn({ store, pathName, params, relativePathname, query })).catch((e) => {\n            console.error(`[${ false ? 0 : \"server\"}] getInitialState error ${e.toString()}`);\n            return null;\n          })\n        )\n      );\n      const result = res.filter(Boolean).reduce((s, c) => {\n        if (!c) {\n          return s;\n        }\n        s.error = [s.error, c.error].filter(Boolean).join(\" || \");\n        s.props = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(s.props, c.props);\n        s.redirect = c.redirect ? c.redirect : s.redirect;\n        return s;\n      }, {});\n      return {\n        ...result,\n        props: { [propsKey]: result.props || {} }\n      };\n    };\n  } else {\n    return null;\n  }\n};\nconst _preLoad = async ({ route, store, match, query, relativePathname }) => {\n  const getInitialState = await resolvePreLoadStateFunction({ route });\n  if (getInitialState) {\n    const initialState = await getInitialState({\n      store,\n      pathName: match.pathname,\n      params: match.params,\n      relativePathname,\n      query\n    });\n    if (route.path) {\n      return { ...initialState, page: [route.path] };\n    } else {\n      return initialState;\n    }\n  } else if (route.path) {\n    return { page: [route.path] };\n  }\n};\nfunction initialStateWrapper(getInitialState) {\n  function Wrapper(Component) {\n    Component.getInitialState = getInitialState;\n  }\n  return Wrapper;\n}\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/utils/preLoad.ts?");

/***/ }),

/***/ "./src/server/app.ts":
/*!***************************!*\
  !*** ./src/server/app.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHandler: () => (/* binding */ generateHandler)\n/* harmony export */ });\n/* harmony import */ var _middleware_apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware/apiHandler */ \"./src/server/middleware/apiHandler.ts\");\n/* harmony import */ var _middleware_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware/render */ \"./src/server/middleware/render.ts\");\n/* harmony import */ var _middleware_renderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/renderError */ \"./src/server/middleware/renderError.tsx\");\n\n\n\nconst generateHandler = () => (0,_middleware_apiHandler__WEBPACK_IMPORTED_MODULE_0__.wrapperMiddlewareRequest)({\n  requestHandler: _middleware_render__WEBPACK_IMPORTED_MODULE_1__.render,\n  errorHandler: ({ req, res, code, e }) => (0,_middleware_renderError__WEBPACK_IMPORTED_MODULE_2__.renderError)({ req, res, e, code })\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/app.ts?");

/***/ }),

/***/ "./src/server/entry.ts":
/*!*****************************!*\
  !*** ./src/server/entry.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullstack_nest_react_ssr_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullstack-nest-react-ssr/backend */ \"@fullstack-nest-react-ssr/backend\");\n/* harmony import */ var _fullstack_nest_react_ssr_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fullstack_nest_react_ssr_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ \"./src/server/app.ts\");\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generator */ \"./src/server/generator/index.ts\");\n/* harmony import */ var _middleware_develop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware/develop */ \"./src/server/middleware/develop/index.ts\");\n/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static */ \"./src/server/static/index.ts\");\n/* harmony import */ var _util_serverLog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/serverLog */ \"./src/server/util/serverLog.ts\");\n\n\n\n\n\n\n\n\n\n\nlet handlerRender = _app__WEBPACK_IMPORTED_MODULE_5__.generateHandler;\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst startApp = async () => {\n  (0,_fullstack_nest_react_ssr_backend__WEBPACK_IMPORTED_MODULE_0__.bootstrap)(async (nestApp) => {\n    const app = nestApp.getHttpAdapter();\n    app.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"](`${process.cwd()}/public`));\n    if (true) {\n      app.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"]((0,path__WEBPACK_IMPORTED_MODULE_3__.resolve)(process.cwd(), \"\", \"dist\", \"client\")));\n    } else {}\n    if (process.env.FRAMEWORK === \"webpack\") {\n      (0,_static__WEBPACK_IMPORTED_MODULE_8__.page)(app);\n    }\n    await (0,_middleware_develop__WEBPACK_IMPORTED_MODULE_7__.develop)(app);\n    app.use(async (req, res, next) => {\n      const render = await handlerRender();\n      await render(req, res, next);\n    });\n    if ( true && process.env.FRAMEWORK === \"webpack\" && module.hot) {\n      module.hot.accept(/*! ./app.ts */ \"./src/server/app.ts\", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.ts */ \"./src/server/app.ts\");\n(() => {\n        (0,_util_serverLog__WEBPACK_IMPORTED_MODULE_9__.serverLog)(\"app update\", \"info\");\n        handlerRender = _app__WEBPACK_IMPORTED_MODULE_5__.generateHandler;\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n      module.hot.dispose(() => process.exit(0));\n    }\n    const port =  true ? process.env.DEV_PORT : 0;\n    if ((0,_shared__WEBPACK_IMPORTED_MODULE_4__.getIsStaticGenerate)()) {\n      return {\n        port,\n        cb: () => {\n          (0,_util_serverLog__WEBPACK_IMPORTED_MODULE_9__.serverLog)(`start static page generate, base on current router`, \"info\");\n          (0,_generator__WEBPACK_IMPORTED_MODULE_6__.generateStaticPage)().then(() => {\n            process.exit(0);\n          });\n        }\n      };\n    } else {\n      return {\n        port,\n        cb: () => {\n          (0,_util_serverLog__WEBPACK_IMPORTED_MODULE_9__.serverLog)(`app is running, open http://localhost:${port}`, \"info\");\n        }\n      };\n    }\n  });\n};\nstartApp();\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/entry.ts?");

/***/ }),

/***/ "./src/server/generator/index.ts":
/*!***************************************!*\
  !*** ./src/server/generator/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateStaticPage: () => (/* binding */ generateStaticPage)\n/* harmony export */ });\n/* harmony import */ var _server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/webpackManifest */ \"./src/server/util/webpackManifest.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/server/generator/util.ts\");\n\n\nconst generateStaticPage = async () => {\n  const allRouters = await (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPageManifestContent)();\n  const allStaticRouters = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getAllStaticRouters)(allRouters);\n  const allStaticRoutersPage = await Promise.all(allStaticRouters.map((pathConfig) => (0,_util__WEBPACK_IMPORTED_MODULE_1__.generateStaticPage)(pathConfig)));\n  const allStaticRoutersPageWithFilePath = allStaticRoutersPage.filter((config) => config.rawData).map((config) => ({\n    ...config,\n    pathConfig: { ...config.pathConfig, ...(0,_util__WEBPACK_IMPORTED_MODULE_1__.getFileNameFromPath)(config.pathConfig) }\n  })).map((config) => ({ ...config, pathConfig: { ...config.pathConfig, filePath: (0,_util__WEBPACK_IMPORTED_MODULE_1__.getStaticPageOutputPath)(config.pathConfig.fileName) } }));\n  const generateManifest = await Promise.all(\n    allStaticRoutersPageWithFilePath.map(\n      (config) => (0,_util__WEBPACK_IMPORTED_MODULE_1__.prepareOutputPath)(config.pathConfig.filePath).then(\n        () => (0,_util__WEBPACK_IMPORTED_MODULE_1__.writeContentToFilePath)(config.pathConfig.filePath, config.rawData).then(() => ({ config, state: true })).catch(() => ({ config, state: false }))\n      )\n    )\n  );\n  await (0,_util__WEBPACK_IMPORTED_MODULE_1__.writeContentToFilePath)(\n    (0,_server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_0__.manifestStaticPageFile)(\"client\"),\n    JSON.stringify(\n      generateManifest.filter((config) => config.state).map((config) => ({ [config.config.pathConfig.p]: config.config.pathConfig.filePath })).reduce((p, c) => ({ ...p, ...c }), {})\n    )\n  );\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/generator/index.ts?");

/***/ }),

/***/ "./src/server/generator/util.ts":
/*!**************************************!*\
  !*** ./src/server/generator/util.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateStaticPage: () => (/* binding */ generateStaticPage),\n/* harmony export */   getAllStaticRouters: () => (/* binding */ getAllStaticRouters),\n/* harmony export */   getFileNameFromPath: () => (/* binding */ getFileNameFromPath),\n/* harmony export */   getPageManifestContent: () => (/* binding */ getPageManifestContent),\n/* harmony export */   getStaticPageOutputPath: () => (/* binding */ getStaticPageOutputPath),\n/* harmony export */   prepareOutputPath: () => (/* binding */ prepareOutputPath),\n/* harmony export */   writeContentToFilePath: () => (/* binding */ writeContentToFilePath)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @server/util/webpackManifest */ \"./src/server/util/webpackManifest.ts\");\n\n\n\n\nconst getStaticPageOutputPath = (fileName) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), \"\", \"dist\", \"\", \"pages\", fileName);\nconst getPageManifestContent = () => (0,_server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_3__.getAllStateFileContent)(\n  (0,_server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_3__.manifestDepsFile)(\"client\"),\n  (content) => Object.keys(content).map((key) => ({ [key]: content[key].static })).reduce((p, c) => ({ ...p, ...c }), {})\n);\nconst getAllStaticRouters = (allRouters) => Object.keys(allRouters).filter((path2) => allRouters[path2]).map((p) => ({ url: `http://${process.env.PROD_HOST}:${process.env.PROD_PORT}${p.slice(1)}`, p }));\nconst generateStaticPage = (pathConfig) => new Promise((r) => {\n  http__WEBPACK_IMPORTED_MODULE_1___default().get(pathConfig.url, (res) => {\n    const { statusCode } = res;\n    if (statusCode === 200) {\n      res.setEncoding(\"utf-8\");\n      let rawData = \"\";\n      res.on(\"data\", (chunk) => rawData += chunk);\n      res.on(\"end\", () => r({ rawData, pathConfig }));\n      res.on(\"error\", (error) => r({ error, pathConfig }));\n    } else {\n      r({ pathConfig, error: new Error(\"500 error\") });\n    }\n  }).on(\"error\", (error) => r({ pathConfig, error }));\n});\nconst getFileNameFromPath = (pathConfig) => {\n  const path2 = pathConfig.p.slice(1);\n  const fileName = path2 === \"/\" ? \"index.html\" : `${path2.slice(1)}.html`;\n  return { ...pathConfig, fileName };\n};\nconst prepareOutputPath = (p) => fs_promises__WEBPACK_IMPORTED_MODULE_0___default().mkdir(path__WEBPACK_IMPORTED_MODULE_2___default().dirname(p), { recursive: true }).catch();\nconst writeContentToFilePath = (p, content) => fs_promises__WEBPACK_IMPORTED_MODULE_0___default().writeFile(p, content);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/generator/util.ts?");

/***/ }),

/***/ "./src/server/middleware/apiHandler.ts":
/*!*********************************************!*\
  !*** ./src/server/middleware/apiHandler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compose: () => (/* binding */ compose),\n/* harmony export */   defaultRunRequestMiddleware: () => (/* binding */ defaultRunRequestMiddleware),\n/* harmony export */   wrapperMiddlewareRequest: () => (/* binding */ wrapperMiddlewareRequest)\n/* harmony export */ });\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _server_util_serverLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/util/serverLog */ \"./src/server/util/serverLog.ts\");\n\n\nconst excludeApiMiddlewareHandler = async (ctx, nextMiddleware) => {\n  const { req, next } = ctx;\n  if (req.path.startsWith(\"/api\") || req.path.startsWith(\"api\")) {\n    next();\n  } else {\n    await nextMiddleware();\n  }\n};\nconst catchMiddlewareHandler = async (ctx, nextMiddleware) => {\n  const { req, res, errorHandler } = ctx;\n  try {\n    await nextMiddleware();\n  } catch (e) {\n    (0,_server_util_serverLog__WEBPACK_IMPORTED_MODULE_1__.serverLog)(`url: ${req.originalUrl}, method: ${req.method} error, ${e.message}`, \"error\");\n    if (errorHandler && typeof errorHandler === \"function\") {\n      if (e instanceof _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError) {\n        await errorHandler({ ctx, req, res, e, code: e.code });\n      } else if (e instanceof Error) {\n        await errorHandler({ ctx, req, res, e, code: 404 });\n      }\n    } else {\n      res.status(e instanceof _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError ? e.code : 500).json({ data: e.toString() });\n    }\n  }\n};\nconst runRequestMiddlewareHandler = async (ctx) => {\n  const { requestHandler, req, res } = ctx;\n  await requestHandler({ req, res });\n};\nconst compose = (...middleWares) => {\n  return function(ctx, next) {\n    let runTime = 0;\n    let index = -1;\n    function dispatch(i) {\n      if (i <= index) {\n        throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError(\"compose index error, every middleware only allow call once\", 500);\n      }\n      runTime++;\n      if (runTime > middleWares.length + 5) {\n        throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError(\"call middleWare many times, look like a infinite loop and will stop call next\", 500);\n      }\n      index = i;\n      const fn = middleWares[i] || next;\n      if (fn) {\n        try {\n          return Promise.resolve(fn(ctx, () => dispatch(i + 1)));\n        } catch (e) {\n          (0,_server_util_serverLog__WEBPACK_IMPORTED_MODULE_1__.serverLog)(`compose catch error: ${e.message}`, \"error\");\n          return Promise.resolve();\n        }\n      } else {\n        (0,_server_util_serverLog__WEBPACK_IMPORTED_MODULE_1__.serverLog)(\"all middleware done, do not call next\", \"warn\");\n        return Promise.resolve();\n      }\n    }\n    return dispatch(0);\n  };\n};\nconst composedMiddleware = compose(excludeApiMiddlewareHandler, catchMiddlewareHandler, runRequestMiddlewareHandler);\nconst defaultRunRequestMiddleware = runRequestMiddlewareHandler;\nconst wrapperMiddlewareRequest = function(config, composed = composedMiddleware) {\n  return async (req, res, next) => {\n    const ctx = { ...config, req, res, next };\n    try {\n      await composed(ctx, ctx.requestHandler);\n    } catch (e) {\n      res.status(500).json({ data: e.toString() });\n    }\n  };\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/apiHandler.ts?");

/***/ }),

/***/ "./src/server/middleware/develop/index.ts":
/*!************************************************!*\
  !*** ./src/server/middleware/develop/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   develop: () => (/* binding */ develop)\n/* harmony export */ });\n/* harmony import */ var _viteMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viteMiddleware */ \"./src/server/middleware/develop/viteMiddleware.ts\");\n/* harmony import */ var _webpackMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpackMiddleware */ \"./src/server/middleware/develop/webpackMiddleware.ts\");\n\n\nconst develop = async (app) => {\n  if (true) {\n    await (0,_viteMiddleware__WEBPACK_IMPORTED_MODULE_0__.viteMiddleware)(app);\n  } else {}\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/develop/index.ts?");

/***/ }),

/***/ "./src/server/middleware/develop/viteMiddleware.ts":
/*!*********************************************************!*\
  !*** ./src/server/middleware/develop/viteMiddleware.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   viteMiddleware: () => (/* binding */ viteMiddleware)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst viteMiddleware = async (app) => {\n  if ( true && process.env.CLIENT_ENTRY) {\n    const vite = __webpack_require__(/*! vite */ \"vite\");\n    const viteServer = await vite.createServer({\n      configFile: (0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)(process.cwd(), \"vite.config.ts\")\n    });\n    app.use(viteServer.middlewares);\n    app.use((req, _, next) => {\n      req.viteServer = viteServer;\n      next();\n    });\n  }\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/develop/viteMiddleware.ts?");

/***/ }),

/***/ "./src/server/middleware/develop/webpackMiddleware.ts":
/*!************************************************************!*\
  !*** ./src/server/middleware/develop/webpackMiddleware.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   webpackMiddleware: () => (/* binding */ webpackMiddleware)\n/* harmony export */ });\nconst webpackMiddleware = (app) => {\n  return new Promise((resolve) => {\n    if (false) {} else {\n      resolve();\n    }\n  });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/develop/webpackMiddleware.ts?");

/***/ }),

/***/ "./src/server/middleware/render.ts":
/*!*****************************************!*\
  !*** ./src/server/middleware/render.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ \"./src/server/middleware/renderPage/index.ts\");\n\n\nconst render = async ({ req, res }) => {\n  if (false) {} else {\n    const { isSSR } = req.query;\n    if (isSSR || (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getIsSSR)()) {\n      await (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderSSR)({ req, res });\n    } else {\n      await (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderCSR)({ req, res });\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/render.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/compose.ts":
/*!*****************************************************!*\
  !*** ./src/server/middleware/renderPage/compose.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRender: () => (/* binding */ composeRender)\n/* harmony export */ });\nconst composeRender = (...middleware) => (render) => middleware.reduce((m1, m2) => (targetRender) => m1(m2(targetRender)))(render);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/compose.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/index.ts":
/*!***************************************************!*\
  !*** ./src/server/middleware/renderPage/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCSR: () => (/* binding */ renderCSR),\n/* harmony export */   renderP_CSR: () => (/* binding */ renderP_CSR),\n/* harmony export */   renderSSR: () => (/* binding */ renderSSR)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ \"./src/server/middleware/renderPage/compose.ts\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware */ \"./src/server/middleware/renderPage/middleware/index.ts\");\n/* harmony import */ var _render_viteRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/viteRender */ \"./src/server/middleware/renderPage/render/viteRender.ts\");\n/* harmony import */ var _render_webpackRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render/webpackRender */ \"./src/server/middleware/renderPage/render/webpackRender.ts\");\n\n\n\n\n\nconst renderSSR = (0,_compose__WEBPACK_IMPORTED_MODULE_1__.composeRender)(\n  (0,_middleware__WEBPACK_IMPORTED_MODULE_2__.generateGlobalEnv)({\n    isSSR: true,\n    isSTATIC: (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getIsStaticGenerate)(),\n    isPURE_CSR: false,\n    isMIDDLEWARE:  true ? true : 0,\n    isDEVELOPMENT: true,\n    isANIMATE_ROUTER: (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getIsAnimateRouter)(),\n    PUBLIC_API_HOST:  true ? process.env.PUBLIC_DEV_API_HOST : 0\n  }),\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.initLang,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.initStore,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadStore,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadLang,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadAsset\n)(async (args) => {\n  if (true) {\n    const targetRender = (0,_render_viteRender__WEBPACK_IMPORTED_MODULE_3__.viteRender)({ mode: \"SSR\" });\n    await targetRender(args);\n  } else {}\n});\nconst renderCSR = (0,_compose__WEBPACK_IMPORTED_MODULE_1__.composeRender)(\n  (0,_middleware__WEBPACK_IMPORTED_MODULE_2__.generateGlobalEnv)({\n    isSSR: false,\n    isSTATIC: false,\n    isPURE_CSR: false,\n    isDEVELOPMENT: true,\n    isMIDDLEWARE:  true ? true : 0,\n    isANIMATE_ROUTER: (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getIsAnimateRouter)(),\n    PUBLIC_API_HOST:  true ? process.env.PUBLIC_DEV_API_HOST : 0\n  }),\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.initLang,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.initStore,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadStore,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadLang,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadAsset\n)(async (args) => {\n  if (true) {\n    const targetRender = (0,_render_viteRender__WEBPACK_IMPORTED_MODULE_3__.viteRender)({ mode: \"CSR\" });\n    await targetRender(args);\n  } else {}\n});\nconst renderP_CSR = (0,_compose__WEBPACK_IMPORTED_MODULE_1__.composeRender)(\n  (0,_middleware__WEBPACK_IMPORTED_MODULE_2__.generateGlobalEnv)({\n    isSSR: false,\n    isSTATIC: false,\n    isPURE_CSR: true,\n    isMIDDLEWARE:  true ? true : 0,\n    isDEVELOPMENT: true,\n    isANIMATE_ROUTER: (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getIsAnimateRouter)(),\n    PUBLIC_API_HOST:  true ? process.env.PUBLIC_DEV_API_HOST : 0\n  }),\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.initLang,\n  _middleware__WEBPACK_IMPORTED_MODULE_2__.loadAsset\n)(async (args) => {\n  if (true) {\n    const targetRender = (0,_render_viteRender__WEBPACK_IMPORTED_MODULE_3__.viteRender)({ mode: \"P_CSR\" });\n    await targetRender(args);\n  } else {}\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/index.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/globalEnv.ts":
/*!******************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/globalEnv.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateGlobalEnv: () => (/* binding */ generateGlobalEnv)\n/* harmony export */ });\nconst generateGlobalEnv = ({ isSSR, isSTATIC, isPURE_CSR, isMIDDLEWARE, isDEVELOPMENT, isANIMATE_ROUTER, PUBLIC_API_HOST }) => (next) => async (args) => {\n  args.env = {\n    isSSR: isSSR || args.req.query.isSSR || false,\n    isSTATIC,\n    isPURE_CSR,\n    isDEVELOPMENT,\n    isMIDDLEWARE,\n    isANIMATE_ROUTER,\n    PUBLIC_API_HOST\n  };\n  await next(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/globalEnv.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/index.ts":
/*!**************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateGlobalEnv: () => (/* reexport safe */ _globalEnv__WEBPACK_IMPORTED_MODULE_0__.generateGlobalEnv),\n/* harmony export */   initLang: () => (/* reexport safe */ _initLang__WEBPACK_IMPORTED_MODULE_1__.initLang),\n/* harmony export */   initStore: () => (/* reexport safe */ _initStore__WEBPACK_IMPORTED_MODULE_2__.initStore),\n/* harmony export */   loadAsset: () => (/* reexport safe */ _loadAsset__WEBPACK_IMPORTED_MODULE_5__.loadAsset),\n/* harmony export */   loadLang: () => (/* reexport safe */ _loadLang__WEBPACK_IMPORTED_MODULE_4__.loadLang),\n/* harmony export */   loadStore: () => (/* reexport safe */ _loadStore__WEBPACK_IMPORTED_MODULE_3__.loadStore)\n/* harmony export */ });\n/* harmony import */ var _globalEnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalEnv */ \"./src/server/middleware/renderPage/middleware/globalEnv.ts\");\n/* harmony import */ var _initLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initLang */ \"./src/server/middleware/renderPage/middleware/initLang.ts\");\n/* harmony import */ var _initStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initStore */ \"./src/server/middleware/renderPage/middleware/initStore.ts\");\n/* harmony import */ var _loadStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadStore */ \"./src/server/middleware/renderPage/middleware/loadStore.ts\");\n/* harmony import */ var _loadLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadLang */ \"./src/server/middleware/renderPage/middleware/loadLang.ts\");\n/* harmony import */ var _loadAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadAsset */ \"./src/server/middleware/renderPage/middleware/loadAsset.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/index.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/initLang.ts":
/*!*****************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/initLang.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLang: () => (/* binding */ initLang)\n/* harmony export */ });\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\nconst initLang = (next) => async (args) => {\n  const { env } = args;\n  if (!env) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError(\"env \\u6CA1\\u6709\\u521D\\u59CB\\u5316\", 5e3);\n  }\n  const { req, res } = args;\n  const cookieLang = req.cookies?.site_lang;\n  const lang = cookieLang || _shared__WEBPACK_IMPORTED_MODULE_1__.defaultLang;\n  res.cookie(\"site_lang\", lang);\n  args.lang = lang;\n  env[\"LANG\"] = lang;\n  await next(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/initLang.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/initStore.ts":
/*!******************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/initStore.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initStore: () => (/* binding */ initStore)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\nconst initStore = (next) => async (args) => {\n  const store = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createUniversalStore)();\n  args.store = store;\n  await next(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/initStore.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/loadAsset.ts":
/*!******************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/loadAsset.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAsset: () => (/* binding */ loadAsset)\n/* harmony export */ });\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _server_util_viteManifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/util/viteManifest */ \"./src/server/util/viteManifest.ts\");\n/* harmony import */ var _server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/util/webpackManifest */ \"./src/server/util/webpackManifest.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\n\nconst loadAsset = (next) => async (args) => {\n  if (true) {\n    if (true) {\n      const assets = {\n        scriptsPath: [\n          {\n            type: \"module\",\n            path: \"/@vite/client\"\n          },\n          {\n            type: \"module\",\n            dangerouslySetInnerHTML: {\n              __html: `\n              import RefreshRuntime from \"/@react-refresh\"\n              RefreshRuntime.injectIntoGlobalHook(window)\n              window.$RefreshReg$ = () => {}\n              window.$RefreshSig$ = () => (type) => type\n              window.__vite_plugin_react_preamble_installed__ = true\n                `\n            }\n          },\n          {\n            type: \"module\",\n            path: process.env.CLIENT_ENTRY\n          }\n        ]\n      };\n      args.assets = assets;\n    } else {}\n  } else {}\n  await next(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/loadAsset.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/loadLang.ts":
/*!*****************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/loadLang.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadLang: () => (/* binding */ loadLang)\n/* harmony export */ });\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\nconst loadLang = (next) => async (args) => {\n  const { store, lang } = args;\n  if (!store || !lang) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError(\"store or lang \\u521D\\u59CB\\u5316\\u5931\\u8D25\", 500);\n  }\n  if (!_shared__WEBPACK_IMPORTED_MODULE_1__.supportedLang[lang]) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_0__.RenderError(\"\\u4E0D\\u652F\\u6301\\u7684\\u8BED\\u8A00\", 404);\n  }\n  await (0,_shared__WEBPACK_IMPORTED_MODULE_1__.loadCurrentLang)(store.dispatch, lang);\n  await next(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/loadLang.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/middleware/loadStore.ts":
/*!******************************************************************!*\
  !*** ./src/server/middleware/renderPage/middleware/loadStore.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStore: () => (/* binding */ loadStore)\n/* harmony export */ });\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @client/router */ \"./src/client/router/index.ts\");\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _shared_store_reducer_client_clientProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/store/reducer/client/clientProps */ \"./src/shared/store/reducer/client/clientProps.ts\");\n\n\n\n\nconst loadStore = (next) => async (args) => {\n  const { req, res, lang, store } = args;\n  if (!lang || !store) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_2__.RenderError(`server \\u521D\\u59CB\\u5316\\u5931\\u8D25 lang: ${lang}, store: ${store}`, 500);\n  }\n  const { error, redirect, page, props } = await (0,_client_utils__WEBPACK_IMPORTED_MODULE_1__.preLoad)(_client_router__WEBPACK_IMPORTED_MODULE_0__.allRoutes, req.path, new URLSearchParams(req.url.split(\"?\")[1]), store) || {};\n  args.page = page;\n  if (error) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_2__.RenderError(error, 403);\n  }\n  if (redirect) {\n    const query = redirect.location.query.toString();\n    const path = query.length ? redirect.location.pathName + \"?\" + query : redirect.location.pathName;\n    res.writeHead(redirect.code || 302, { location: path });\n    res.end();\n  } else {\n    props && store.dispatch((0,_shared_store_reducer_client_clientProps__WEBPACK_IMPORTED_MODULE_3__.changeClientPropsSuccess)(props));\n    await next(args);\n  }\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/middleware/loadStore.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/render/viteRender.ts":
/*!***************************************************************!*\
  !*** ./src/server/middleware/renderPage/render/viteRender.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   viteRender: () => (/* binding */ viteRender)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst viteRender = ({ mode }) => async (args) => {\n  if (true) {\n    const { req } = args;\n    const { viteServer } = req;\n    const { targetRender } = await viteServer.ssrLoadModule((0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)(process.cwd(), \"src/server/middleware/renderPage/native\", `render${mode}.tsx`));\n    await targetRender(args);\n  } else {}\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/render/viteRender.ts?");

/***/ }),

/***/ "./src/server/middleware/renderPage/render/webpackRender.ts":
/*!******************************************************************!*\
  !*** ./src/server/middleware/renderPage/render/webpackRender.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   webpackRender: () => (/* binding */ webpackRender)\n/* harmony export */ });\n/* harmony import */ var _native_renderCSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../native/renderCSR */ \"./src/server/middleware/renderPage/native/renderCSR.tsx\");\n/* harmony import */ var _native_renderP_CSR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../native/renderP_CSR */ \"./src/server/middleware/renderPage/native/renderP_CSR.tsx\");\n/* harmony import */ var _native_renderSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../native/renderSSR */ \"./src/server/middleware/renderPage/native/renderSSR.tsx\");\n\n\n\nconst webpackRender = ({ mode }) => async (args) => {\n  if (mode === \"SSR\")\n    return await (0,_native_renderSSR__WEBPACK_IMPORTED_MODULE_2__.targetRender)(args);\n  if (mode === \"CSR\")\n    return await (0,_native_renderCSR__WEBPACK_IMPORTED_MODULE_0__.targetRender)(args);\n  if (mode === \"P_CSR\")\n    return await (0,_native_renderP_CSR__WEBPACK_IMPORTED_MODULE_1__.targetRender)(args);\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/render/webpackRender.ts?");

/***/ }),

/***/ "./src/server/static/index.ts":
/*!************************************!*\
  !*** ./src/server/static/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   page: () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/server/static/util.ts\");\n\n\nconst page = (app) => {\n  if (false) {}\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/static/index.ts?");

/***/ }),

/***/ "./src/server/static/util.ts":
/*!***********************************!*\
  !*** ./src/server/static/util.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticPageManifest: () => (/* binding */ getStaticPageManifest)\n/* harmony export */ });\n/* harmony import */ var _server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/util/webpackManifest */ \"./src/server/util/webpackManifest.ts\");\n\nconst getStaticPageManifest = () => (0,_server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_0__.getAllStateFileContent)((0,_server_util_webpackManifest__WEBPACK_IMPORTED_MODULE_0__.manifestStaticPageFile)(\"client\"));\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/static/util.ts?");

/***/ }),

/***/ "./src/server/util/element.ts":
/*!************************************!*\
  !*** ./src/server/util/element.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePreloadScriptElements: () => (/* binding */ generatePreloadScriptElements),\n/* harmony export */   generateScriptElements: () => (/* binding */ generateScriptElements),\n/* harmony export */   generateStyleElements: () => (/* binding */ generateStyleElements)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst generateStyleElements = (paths) => {\n  return paths.map(\n    (s, i) => typeof s === \"string\" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", { key: i, href: s, rel: \"stylesheet\" }) : s.path ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", {\n      key: i,\n      href: s.path,\n      rel: \"stylesheet\",\n      ...Object.keys(s).filter((k) => k !== \"path\").reduce((p, k) => (p[k] = s[k], p), {})\n    }) : null\n  );\n};\nconst generateScriptElements = (paths) => paths.map(\n  (s, i) => typeof s === \"string\" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"script\", { key: i, src: s }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"script\", {\n    key: i,\n    src: s.path,\n    ...Object.keys(s).filter((k) => k !== \"path\").reduce((p, k) => (p[k] = s[k], p), {})\n  })\n);\nconst generatePreloadScriptElements = (paths) => paths.map(\n  (s, i) => typeof s === \"string\" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", { key: i, rel: \"preload\", as: \"script\", href: s }) : s.path ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", {\n    key: i,\n    rel: \"preload\",\n    as: \"script\",\n    href: s.path\n  }) : null\n);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/util/element.ts?");

/***/ }),

/***/ "./src/server/util/renderError.ts":
/*!****************************************!*\
  !*** ./src/server/util/renderError.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderError: () => (/* binding */ RenderError)\n/* harmony export */ });\nclass RenderError extends Error {\n  constructor(message, code) {\n    super(message);\n    this.code = code;\n  }\n}\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/util/renderError.ts?");

/***/ }),

/***/ "./src/server/util/serverLog.ts":
/*!**************************************!*\
  !*** ./src/server/util/serverLog.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serverLog: () => (/* binding */ serverLog)\n/* harmony export */ });\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pino_pretty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pino-pretty */ \"pino-pretty\");\n/* harmony import */ var pino_pretty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pino_pretty__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst serverLog = (msg, level) => (0,pino__WEBPACK_IMPORTED_MODULE_0__.pino)(pino_pretty__WEBPACK_IMPORTED_MODULE_1___default()())[level](`[server] ${msg}`);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/util/serverLog.ts?");

/***/ }),

/***/ "./src/server/util/viteManifest.ts":
/*!*****************************************!*\
  !*** ./src/server/util/viteManifest.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllStateFileContent: () => (/* binding */ getAllStateFileContent),\n/* harmony export */   mainScriptsPath: () => (/* binding */ mainScriptsPath),\n/* harmony export */   mainStylesPath: () => (/* binding */ mainStylesPath),\n/* harmony export */   manifestStateFile: () => (/* binding */ manifestStateFile)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst outputPath = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), \"\",  true ? \"dev\" : 0, \"\", env);\nconst manifestFile = () =>  true ? \"manifest-dev-vite.json\" : 0;\nconst manifestStateFile = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(outputPath(env), manifestFile());\nconst _getAllStateFileContent = async (path2, normalize = (s) => s) => {\n  try {\n    const content = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(path2, { encoding: \"utf-8\" }).then((c) => JSON.parse(c));\n    return normalize(content);\n  } catch (e) {\n    console.log(e);\n    throw e;\n  }\n};\nconst getAllStateFileContent =  true ? _getAllStateFileContent : 0;\nconst mainStylesPath = (content) => {\n  const keys = Object.keys(content).filter((key) => content[key].isEntry);\n  return keys.map((key) => content[key]?.[\"css\"]).reduce((p, c) => {\n    if (c) {\n      return [...p, ...c];\n    } else {\n      return p;\n    }\n  }, []);\n};\nconst mainScriptsPath = (content) => {\n  const keys = Object.keys(content).filter((key) => content[key].isEntry);\n  const paths = [];\n  const legacyPaths = [];\n  const modulePaths = [];\n  keys.forEach((key) => {\n    if (content[key]) {\n      if (key.includes(\"legacy\")) {\n        legacyPaths.push(key);\n      } else {\n        modulePaths.push(key);\n      }\n    }\n  });\n  legacyPaths.sort((key) => key.includes(\"vite/legacy-polyfills\") ? -1 : 0);\n  modulePaths.forEach((key) => {\n    paths.push(...content[key][\"imports\"].map((key2) => ({ path: content[key2][\"file\"], type: \"module\", async: true })));\n    paths.push({ path: content[key][\"file\"], type: \"module\", async: true });\n  });\n  legacyPaths.forEach((key) => {\n    paths.push(\n      ...(content[key]?.[\"imports\"] || []).map((key2) => ({\n        path: content[key2][\"file\"],\n        noModule: true,\n        async: true\n      }))\n    );\n    paths.push({ path: content[key][\"file\"], noModule: true, async: true });\n  });\n  return paths;\n};\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/util/viteManifest.ts?");

/***/ }),

/***/ "./src/server/util/webpackManifest.ts":
/*!********************************************!*\
  !*** ./src/server/util/webpackManifest.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dynamicPageScriptsPath: () => (/* binding */ dynamicPageScriptsPath),\n/* harmony export */   dynamicPageStylesPath: () => (/* binding */ dynamicPageStylesPath),\n/* harmony export */   getAllStateFileContent: () => (/* binding */ getAllStateFileContent),\n/* harmony export */   getDynamicPagePath: () => (/* binding */ getDynamicPagePath),\n/* harmony export */   mainScriptsPath: () => (/* binding */ mainScriptsPath),\n/* harmony export */   mainStylesPath: () => (/* binding */ mainStylesPath),\n/* harmony export */   manifestDepsFile: () => (/* binding */ manifestDepsFile),\n/* harmony export */   manifestStateFile: () => (/* binding */ manifestStateFile),\n/* harmony export */   manifestStaticPageFile: () => (/* binding */ manifestStaticPageFile),\n/* harmony export */   runtimeScriptsPath: () => (/* binding */ runtimeScriptsPath)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst outputPath = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), \"\",  true ? \"dev\" : 0, \"\", env);\nconst manifestFile = () =>  true ? \"manifest-dev.json\" : 0;\nconst manifestDeps = \"manifest-deps.json\";\nconst manifestStateFile = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(outputPath(env), manifestFile());\nconst manifestDepsFile = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(outputPath(env), manifestDeps);\nconst manifestStaticPageFile = (env) => path__WEBPACK_IMPORTED_MODULE_2___default().resolve(outputPath(env), \"manifest-static.json\");\nconst _getAllStateFileContent = async (path2, normalize = (s) => s) => {\n  try {\n    const content = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(path2, { encoding: \"utf-8\" }).then((c) => JSON.parse(c));\n    return normalize(content);\n  } catch (e) {\n    console.log(e);\n    throw e;\n  }\n};\nconst getAllStateFileContent =  true ? _getAllStateFileContent : 0;\nconst baseStylesPath = (content, judge) => Object.keys(content).filter((file) => content[file].endsWith(\".css\")).filter(judge).map((key) => content[key]);\nconst baseScriptsPath = (content, judge) => Object.keys(content).filter((file) => content[file].endsWith(\".js\")).filter(judge).map((key) => content[key]);\nconst mainStylesPath = (content) => baseStylesPath(content, (file) => file.startsWith(\"main\") || file.startsWith(\"vendor\"));\nconst mainScriptsPath = (content) => baseScriptsPath(content, (f) => f.startsWith(\"main\") || f.startsWith(\"vendor\"));\nconst runtimeScriptsPath = (content) => baseScriptsPath(content, (f) => f.startsWith(\"runtime\"));\nconst getDynamicPagePath = (content, page) => Object.keys(content).filter((key) => page.some((p) => p === key || p === key.slice(1))).map((key) => content[key]).reduce((p, c) => p.concat(c), []);\nconst dynamicPageScriptsPath = (content, pageName) => baseScriptsPath(content, (f) => pageName.includes(f));\nconst dynamicPageStylesPath = (content, pageName) => baseStylesPath(content, (f) => pageName.includes(f));\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/util/webpackManifest.ts?");

/***/ }),

/***/ "./src/shared/emotionCache.ts":
/*!************************************!*\
  !*** ./src/shared/emotionCache.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEmotionCache: () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst unwrap = (moduleFrom) => moduleFrom.default ? moduleFrom.default : moduleFrom;\nconst createEmotionCache = () => unwrap((_emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()))({ key: \"css\" });\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/emotionCache.ts?");

/***/ }),

/***/ "./src/shared/env.ts":
/*!***************************!*\
  !*** ./src/shared/env.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getIsAnimateRouter: () => (/* binding */ getIsAnimateRouter),\n/* harmony export */   getIsMiddleware: () => (/* binding */ getIsMiddleware),\n/* harmony export */   getIsP_CSR: () => (/* binding */ getIsP_CSR),\n/* harmony export */   getIsSSR: () => (/* binding */ getIsSSR),\n/* harmony export */   getIsStaticGenerate: () => (/* binding */ getIsStaticGenerate),\n/* harmony export */   getPublicApi: () => (/* binding */ getPublicApi)\n/* harmony export */ });\n/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/memoize */ \"lodash/memoize\");\n/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getIsMiddleware = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(() =>  true ? JSON.parse(process.env.MIDDLEWARE || \"false\") : 0);\nconst getIsSSR = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(() =>  true ? JSON.parse(process.env.SSR || \"false\") : 0);\nconst getIsAnimateRouter = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(() =>  true ? JSON.parse(process.env.ANIMATE_ROUTER || \"false\") : 0);\nconst getIsP_CSR = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(() =>  true ? false : 0);\nconst getIsStaticGenerate = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(\n  () =>  true ? JSON.parse(process.env.STATIC_GENERATE || \"false\") && \"development\" === \"production\" : 0\n);\nconst getPublicApi = lodash_memoize__WEBPACK_IMPORTED_MODULE_0___default()(\n  () =>  true ?  true ? process.env.PUBLIC_DEV_API_HOST : 0 : 0\n);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/env.ts?");

/***/ }),

/***/ "./src/shared/i18n.ts":
/*!****************************!*\
  !*** ./src/shared/i18n.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultLang: () => (/* binding */ defaultLang),\n/* harmony export */   loadCurrentLang: () => (/* binding */ loadCurrentLang),\n/* harmony export */   supportedLang: () => (/* binding */ supportedLang)\n/* harmony export */ });\n/* harmony import */ var _store_reducer_client_clientLang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/reducer/client/clientLang */ \"./src/shared/store/reducer/client/clientLang.ts\");\n/* harmony import */ var _store_reducer_server_serverLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer/server/serverLang */ \"./src/shared/store/reducer/server/serverLang.ts\");\n\n\nconst supportedLang = {\n  en: \"English\",\n  ar: \"Arabic (\\u0639\\u0631\\u0628\\u064A)\"\n};\nconst loadCurrentLang = async (dispatch, lang) => {\n  await dispatch((0,_store_reducer_server_serverLang__WEBPACK_IMPORTED_MODULE_1__.serverLangAsyncAction)(lang));\n  dispatch((0,_store_reducer_client_clientLang__WEBPACK_IMPORTED_MODULE_0__.changeClientLang)(lang));\n};\nconst defaultLang = \"en\";\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/i18n.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HTML: () => (/* reexport safe */ _template__WEBPACK_IMPORTED_MODULE_0__.HTML),\n/* harmony export */   createEmotionCache: () => (/* reexport safe */ _emotionCache__WEBPACK_IMPORTED_MODULE_2__.createEmotionCache),\n/* harmony export */   createUniversalStore: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.createUniversalStore),\n/* harmony export */   defaultLang: () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.defaultLang),\n/* harmony export */   getIsAnimateRouter: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getIsAnimateRouter),\n/* harmony export */   getIsMiddleware: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getIsMiddleware),\n/* harmony export */   getIsP_CSR: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getIsP_CSR),\n/* harmony export */   getIsSSR: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getIsSSR),\n/* harmony export */   getIsStaticGenerate: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getIsStaticGenerate),\n/* harmony export */   getPublicApi: () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_3__.getPublicApi),\n/* harmony export */   loadCurrentLang: () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.loadCurrentLang),\n/* harmony export */   safeData: () => (/* reexport safe */ _safeData__WEBPACK_IMPORTED_MODULE_4__.safeData),\n/* harmony export */   supportedLang: () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.supportedLang),\n/* harmony export */   theme: () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_6__.theme),\n/* harmony export */   useAppDispatch: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/shared/template/index.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/shared/store/index.ts\");\n/* harmony import */ var _emotionCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotionCache */ \"./src/shared/emotionCache.ts\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ \"./src/shared/env.ts\");\n/* harmony import */ var _safeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safeData */ \"./src/shared/safeData.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ \"./src/shared/i18n.ts\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ \"./src/shared/theme.ts\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/index.ts?");

/***/ }),

/***/ "./src/shared/safeData.ts":
/*!********************************!*\
  !*** ./src/shared/safeData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   safeData: () => (/* binding */ safeData)\n/* harmony export */ });\nconst safeData = (data, key) => {\n  if (key) {\n    const cacheData = data[key];\n    Object.defineProperty(data, key, {\n      get: function() {\n        return cacheData;\n      },\n      configurable: false\n    });\n    return data;\n  } else {\n    Object.keys(data).forEach((key2) => {\n      const cacheData = data[key2];\n      Object.defineProperty(data, key2, {\n        get: function() {\n          return cacheData;\n        },\n        configurable: false\n      });\n    });\n    return data;\n  }\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/safeData.ts?");

/***/ }),

/***/ "./src/shared/store/index.ts":
/*!***********************************!*\
  !*** ./src/shared/store/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUniversalStore: () => (/* binding */ createUniversalStore),\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/shared/store/reducer/index.ts\");\n\n\n\nconst createUniversalStore = (props = {}) => {\n  const { preloadedState, middleware = [] } = props;\n  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),\n    devTools: true,\n    preloadedState,\n    reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__.reducer\n  });\n  if (false) {}\n  return store;\n};\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/index.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/client/clientLang.ts":
/*!*******************************************************!*\
  !*** ./src/shared/store/reducer/client/clientLang.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeClientLang: () => (/* binding */ changeClientLang),\n/* harmony export */   clientLangSlice: () => (/* binding */ clientLangSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = { value: \"\" };\nconst clientLangSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"clientLang\",\n  initialState,\n  reducers: {\n    changeClientLang(state, action) {\n      state.value = action.payload;\n    }\n  }\n});\nconst { changeClientLang } = clientLangSlice.actions;\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/client/clientLang.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/client/clientProps.ts":
/*!********************************************************!*\
  !*** ./src/shared/store/reducer/client/clientProps.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeClientPropsFailed: () => (/* binding */ changeClientPropsFailed),\n/* harmony export */   changeClientPropsStart: () => (/* binding */ changeClientPropsStart),\n/* harmony export */   changeClientPropsSuccess: () => (/* binding */ changeClientPropsSuccess),\n/* harmony export */   clientPropsSlice: () => (/* binding */ clientPropsSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = { state: \"initial\", data: {}, error: \"\" };\nconst clientPropsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"clientProps\",\n  initialState,\n  reducers: {\n    changeClientPropsStart(state) {\n      state.state = \"loading\";\n    },\n    changeClientPropsSuccess(state, action) {\n      state.state = \"loaded\";\n      state.data = { ...state.data, ...action.payload };\n    },\n    changeClientPropsFailed(state, action) {\n      state.state = \"loaded\";\n      state.error = action.payload;\n    }\n  }\n});\nconst { changeClientPropsStart, changeClientPropsSuccess, changeClientPropsFailed } = clientPropsSlice.actions;\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/client/clientProps.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/client/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/store/reducer/client/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client),\n/* harmony export */   clientLangSlice: () => (/* reexport safe */ _clientLang__WEBPACK_IMPORTED_MODULE_1__.clientLangSlice),\n/* harmony export */   clientPropsSlice: () => (/* reexport safe */ _clientProps__WEBPACK_IMPORTED_MODULE_2__.clientPropsSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clientLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientLang */ \"./src/shared/store/reducer/client/clientLang.ts\");\n/* harmony import */ var _clientProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientProps */ \"./src/shared/store/reducer/client/clientProps.ts\");\n\n\n\n\n\nconst client = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  [_clientLang__WEBPACK_IMPORTED_MODULE_1__.clientLangSlice.name]: _clientLang__WEBPACK_IMPORTED_MODULE_1__.clientLangSlice.reducer,\n  [_clientProps__WEBPACK_IMPORTED_MODULE_2__.clientPropsSlice.name]: _clientProps__WEBPACK_IMPORTED_MODULE_2__.clientPropsSlice.reducer\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/client/index.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/reducer/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ \"./src/shared/store/reducer/client/index.ts\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ \"./src/shared/store/reducer/server/index.ts\");\n\n\n\nconst reducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({ client: _client__WEBPACK_IMPORTED_MODULE_1__.client, server: _server__WEBPACK_IMPORTED_MODULE_2__.server });\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/index.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/server/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/store/reducer/server/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   server: () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serverLang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverLang */ \"./src/shared/store/reducer/server/serverLang.ts\");\n/* harmony import */ var _serverProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverProps */ \"./src/shared/store/reducer/server/serverProps.ts\");\n\n\n\nconst server = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  [_serverLang__WEBPACK_IMPORTED_MODULE_1__.serverLangSlice.name]: _serverLang__WEBPACK_IMPORTED_MODULE_1__.serverLangSlice.reducer,\n  [_serverProps__WEBPACK_IMPORTED_MODULE_2__.serverPropsSlice.name]: _serverProps__WEBPACK_IMPORTED_MODULE_2__.serverPropsSlice.reducer\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/server/index.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/server/serverLang.ts":
/*!*******************************************************!*\
  !*** ./src/shared/store/reducer/server/serverLang.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serverLangAsyncAction: () => (/* binding */ serverLangAsyncAction),\n/* harmony export */   serverLangSlice: () => (/* binding */ serverLangSlice)\n/* harmony export */ });\n/* harmony import */ var _fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullstack-nest-react-ssr/axios */ \"@fullstack-nest-react-ssr/axios\");\n/* harmony import */ var _fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\nconst initialState = {\n  state: \"initial\",\n  data: {},\n  error: \"\"\n};\nconst serverLangAsyncAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"serverLang/asyncAction\", async (lang) => {\n  const request = (0,_fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__.createRequest)({ baseURL: (0,_shared__WEBPACK_IMPORTED_MODULE_2__.getPublicApi)() });\n  const res = await request.get(`/api/lang`, { params: { lang } });\n  return { [lang]: res.data };\n});\nconst serverLangSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"serverLang\",\n  initialState,\n  reducers: {},\n  extraReducers: (builder) => {\n    builder.addCase(serverLangAsyncAction.pending, (state) => {\n      state.state = \"loading\";\n    }).addCase(serverLangAsyncAction.rejected, (state, action) => {\n      state.state = \"loaded\";\n      state.error = action.payload;\n    }).addCase(serverLangAsyncAction.fulfilled, (state, action) => {\n      state.state = \"loaded\";\n      state.data = { ...state.data, ...action.payload };\n    });\n  }\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/server/serverLang.ts?");

/***/ }),

/***/ "./src/shared/store/reducer/server/serverProps.ts":
/*!********************************************************!*\
  !*** ./src/shared/store/reducer/server/serverProps.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serverPropsAsyncAction: () => (/* binding */ serverPropsAsyncAction),\n/* harmony export */   serverPropsSlice: () => (/* binding */ serverPropsSlice)\n/* harmony export */ });\n/* harmony import */ var _fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullstack-nest-react-ssr/axios */ \"@fullstack-nest-react-ssr/axios\");\n/* harmony import */ var _fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\nconst initialState = {\n  state: \"initial\",\n  data: {},\n  error: \"\"\n};\nconst serverPropsAsyncAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\n  \"serverProps/asyncAction\",\n  async ({ query, preloadPage }) => {\n    const request = (0,_fullstack_nest_react_ssr_axios__WEBPACK_IMPORTED_MODULE_0__.createRequest)({ baseURL: (0,_shared__WEBPACK_IMPORTED_MODULE_2__.getPublicApi)() });\n    const res = await request.get(`/api/preload`, {\n      params: {\n        page: preloadPage,\n        ...query\n      }\n    });\n    return res;\n  }\n);\nconst serverPropsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"serverProps\",\n  initialState,\n  reducers: {},\n  extraReducers: (builder) => {\n    builder.addCase(serverPropsAsyncAction.pending, (state) => {\n      state.state = \"loading\";\n    }).addCase(serverPropsAsyncAction.rejected, (state, action) => {\n      state.state = \"loaded\";\n      state.error = action.payload;\n    }).addCase(serverPropsAsyncAction.fulfilled, (state, action) => {\n      state.state = \"loaded\";\n      state.data = action.payload;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/store/reducer/server/serverProps.ts?");

/***/ }),

/***/ "./src/shared/theme.ts":
/*!*****************************!*\
  !*** ./src/shared/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fullstack_nest_react_ssr_chakra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullstack-nest-react-ssr/chakra */ \"@fullstack-nest-react-ssr/chakra\");\n/* harmony import */ var _fullstack_nest_react_ssr_chakra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullstack_nest_react_ssr_chakra__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(_fullstack_nest_react_ssr_chakra__WEBPACK_IMPORTED_MODULE_1__.theme);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/theme.ts?");

/***/ }),

/***/ "./src/client/common/App.tsx":
/*!***********************************!*\
  !*** ./src/client/common/App.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @client/router */ \"./src/client/router/index.ts\");\n/* harmony import */ var _LoadingBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingBar */ \"./src/client/common/LoadingBar/index.tsx\");\n/* harmony import */ var _RenderMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderMatch */ \"./src/client/common/RenderMatch.tsx\");\n/* harmony import */ var _WrapperCatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WrapperCatch */ \"./src/client/common/WrapperCatch/index.tsx\");\n/* harmony import */ var _WrapperLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WrapperLang */ \"./src/client/common/WrapperLang/index.tsx\");\n/* harmony import */ var _WrapperRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WrapperRoute */ \"./src/client/common/WrapperRoute/index.tsx\");\n\n\n\n\n\n\n\nconst App = () => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WrapperLang__WEBPACK_IMPORTED_MODULE_5__.WrapperLang, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WrapperRoute__WEBPACK_IMPORTED_MODULE_6__.WrapperRoute, { routes: _client_router__WEBPACK_IMPORTED_MODULE_1__.allRoutes, LoadingBar: _LoadingBar__WEBPACK_IMPORTED_MODULE_2__.LoadingBar, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WrapperCatch__WEBPACK_IMPORTED_MODULE_4__.WrapperErrorCatch, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RenderMatch__WEBPACK_IMPORTED_MODULE_3__.RenderMatch, {}) }) }) });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/App.tsx?");

/***/ }),

/***/ "./src/client/common/AutoInjectProps.tsx":
/*!***********************************************!*\
  !*** ./src/client/common/AutoInjectProps.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AutoInjectProps: () => (/* binding */ AutoInjectProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/hooks */ \"./src/client/hooks/index.ts\");\n\n\n\nconst AutoInjectProps = (Component, path = \"/\") => {\n  const MemoComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Component);\n  const RouterComponentWithProps = () => {\n    const props = (0,_client_hooks__WEBPACK_IMPORTED_MODULE_2__.useGetInitialProps)(path);\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemoComponent, { ...props });\n  };\n  return RouterComponentWithProps;\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/AutoInjectProps.tsx?");

/***/ }),

/***/ "./src/client/common/Layout/index.tsx":
/*!********************************************!*\
  !*** ./src/client/common/Layout/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\nlet Layout = class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  render() {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, { title: \"path: \" + this.props.title }),\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_3__.Outlet, {})\n    ] });\n  }\n};\nLayout = __decorateClass([\n  (0,_client_utils__WEBPACK_IMPORTED_MODULE_4__.initialStateWrapper)(({ relativePathname }) => ({ props: { title: relativePathname } }))\n], Layout);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/Layout/index.tsx?");

/***/ }),

/***/ "./src/client/common/LoadingBar/LoadingBar.tsx":
/*!*****************************************************!*\
  !*** ./src/client/common/LoadingBar/LoadingBar.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bar: () => (/* binding */ Bar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @client/hooks */ \"./src/client/hooks/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ \"./src/client/common/LoadingBar/index.module.scss\");\n\n\n\n\n\nlet div;\nconst _Bar = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Bar2(_, ref) {\n  (0,_client_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffectOnce)(() => {\n    if (!div) {\n      div = document.createElement(\"div\");\n    }\n    div.id = \"__loading_bar__\";\n    const before = document.querySelector(\"#__content__\");\n    document.body.insertBefore(div, before);\n  });\n  const isMounted = (0,_client_hooks__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)();\n  return isMounted ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { ref, className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loadingBar, style: { height: `0px`, transform: `scale(0, 1)` } }), div) : null;\n});\nconst Bar = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_Bar);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/LoadingBar/LoadingBar.tsx?");

/***/ }),

/***/ "./src/client/common/LoadingBar/index.tsx":
/*!************************************************!*\
  !*** ./src/client/common/LoadingBar/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadingBar: () => (/* binding */ LoadingBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @client/hooks */ \"./src/client/hooks/index.ts\");\n/* harmony import */ var _client_hooks_useLoadingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/hooks/useLoadingStore */ \"./src/client/hooks/useLoadingStore.ts\");\n/* harmony import */ var _LoadingBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingBar */ \"./src/client/common/LoadingBar/LoadingBar.tsx\");\n\n\n\n\nconst LoadingBar = () => {\n  const loading = (0,_client_hooks_useLoadingStore__WEBPACK_IMPORTED_MODULE_2__.useLoading)((state) => state.loading);\n  const { ref } = (0,_client_hooks__WEBPACK_IMPORTED_MODULE_1__.useLoadingBar)({ loading });\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadingBar__WEBPACK_IMPORTED_MODULE_3__.Bar, { ref });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/LoadingBar/index.tsx?");

/***/ }),

/***/ "./src/client/common/RenderMatch.tsx":
/*!*******************************************!*\
  !*** ./src/client/common/RenderMatch.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenderMatch: () => (/* binding */ RenderMatch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @client/router */ \"./src/client/router/index.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _WrapperRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WrapperRoute */ \"./src/client/common/WrapperRoute/index.tsx\");\n\n\n\n\n\n\n\n\nconst RenderMatch = () => {\n  const loaded = (0,_WrapperRoute__WEBPACK_IMPORTED_MODULE_7__.useLoadedLocation)();\n  const all = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useRoutes)(_client_router__WEBPACK_IMPORTED_MODULE_5__.allRoutes, loaded?.location);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, { minWidth: \"container.lg\", children: (0,_shared__WEBPACK_IMPORTED_MODULE_6__.getIsAnimateRouter)() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, { exitBeforeEnter: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n    framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div,\n    {\n      initial: \"initial\",\n      animate: \"in\",\n      exit: \"out\",\n      variants: {\n        initial: {\n          opacity: 0\n        },\n        in: {\n          opacity: 1\n        },\n        out: {\n          opacity: 0\n        }\n      },\n      transition: {\n        type: \"spring\",\n        damping: 10,\n        stiffness: 50\n      },\n      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, { children: all })\n    }\n  ) }, loaded?.location.pathname) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, { children: all }) });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/RenderMatch.tsx?");

/***/ }),

/***/ "./src/client/common/WrapperCatch/index.tsx":
/*!**************************************************!*\
  !*** ./src/client/common/WrapperCatch/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WrapperErrorCatch: () => (/* binding */ WrapperErrorCatch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass WrapperErrorCatch extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  state = {\n    stack: \"\",\n    error: \"\",\n    hasError: false\n  };\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n  componentDidCatch(error, info) {\n    this.setState({\n      error: error.message,\n      stack: info.componentStack\n    });\n  }\n  render() {\n    if (this.state.hasError)\n      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"pre\", { children: [\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { style: { color: \"red\", whiteSpace: \"pre-wrap\" }, children: this.state.error }),\n        this.state.stack\n      ] });\n    return this.props.children;\n  }\n}\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/WrapperCatch/index.tsx?");

/***/ }),

/***/ "./src/client/common/WrapperLang/index.tsx":
/*!*************************************************!*\
  !*** ./src/client/common/WrapperLang/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WrapperLang: () => (/* binding */ WrapperLang)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\n\nconst WrapperLang = ({ children }) => {\n  const htmlRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  const data = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.server.serverLang.data);\n  const lang = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state) => state.client.clientLang.value);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (!htmlRef.current) {\n      htmlRef.current = document.querySelector(\"html\");\n    }\n    if (htmlRef.current) {\n      htmlRef.current.lang = lang;\n    }\n  }, [lang]);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, { locale: lang, messages: data[lang] || {}, defaultLocale: _shared__WEBPACK_IMPORTED_MODULE_3__.defaultLang, children });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/WrapperLang/index.tsx?");

/***/ }),

/***/ "./src/client/common/WrapperRoute/index.tsx":
/*!**************************************************!*\
  !*** ./src/client/common/WrapperRoute/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadedLocationContext: () => (/* binding */ LoadedLocationContext),\n/* harmony export */   WrapperRoute: () => (/* binding */ WrapperRoute),\n/* harmony export */   useLoadedLocation: () => (/* binding */ useLoadedLocation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @client/hooks */ \"./src/client/hooks/index.ts\");\n/* harmony import */ var _client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @client/utils */ \"./src/client/utils/index.ts\");\n\n\n\n\nconst LoadedLocationContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst WrapperRoute = ({ children, routes, LoadingBar }) => {\n  const { loaded } = (0,_client_hooks__WEBPACK_IMPORTED_MODULE_2__.usePreLoad)({ routes, preLoad: _client_utils__WEBPACK_IMPORTED_MODULE_3__.preLoad });\n  if (!loaded)\n    return null;\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoadedLocationContext.Provider, { value: loaded, children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingBar, {}),\n    children\n  ] });\n};\nconst useLoadedLocation = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoadedLocationContext);\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/client/common/WrapperRoute/index.tsx?");

/***/ }),

/***/ "./src/server/middleware/renderError.tsx":
/*!***********************************************!*\
  !*** ./src/server/middleware/renderError.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderError: () => (/* binding */ renderError)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\nconst renderError = ({ res, code, e }) => res.send(\n  \"<!doctype html>\" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_2__.HTML, { children: [\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"server render error!\" }),\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {}),\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { style: { fontSize: \"18px\", color: \"red\" }, children: [\n        \"error code:\",\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"b\", { children: [\n          \" \",\n          code\n        ] }),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}),\n        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"pre\", { style: { fontSize: \"18px\", color: \"red\" }, children: e.stack })\n      ] }),\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n        \"script\",\n        {\n          dangerouslySetInnerHTML: {\n            __html: `console.error(\\`${e.stack || e.message}\\`);`\n          }\n        }\n      )\n    ] })\n  )\n);\n\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderError.tsx?");

/***/ }),

/***/ "./src/server/middleware/renderPage/native/renderCSR.tsx":
/*!***************************************************************!*\
  !*** ./src/server/middleware/renderPage/native/renderCSR.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   targetRender: () => (/* binding */ targetRender)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_util_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/util/element */ \"./src/server/util/element.ts\");\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\n\n\nconst targetRender = async ({ res, store, lang, env, assets = {} }) => {\n  if (!store || !lang || !env) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_3__.RenderError(\"server \\u521D\\u59CB\\u5316\\u5931\\u8D25\", 500);\n  }\n  const { stylesPath = [], scriptsPath = [], preloadScriptsPath = [] } = assets;\n  res.send(\n    \"<!doctype html>\" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n        _shared__WEBPACK_IMPORTED_MODULE_4__.HTML,\n        {\n          env: JSON.stringify(env),\n          lang: JSON.stringify(lang),\n          link: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generateStyleElements)(stylesPath),\n          preloadedState: JSON.stringify(store.getState()),\n          preLoad: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generatePreloadScriptElements)(preloadScriptsPath),\n          script: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generateScriptElements)(scriptsPath)\n        }\n      )\n    )\n  );\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/native/renderCSR.tsx?");

/***/ }),

/***/ "./src/server/middleware/renderPage/native/renderP_CSR.tsx":
/*!*****************************************************************!*\
  !*** ./src/server/middleware/renderPage/native/renderP_CSR.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   targetRender: () => (/* binding */ targetRender)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_util_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/util/element */ \"./src/server/util/element.ts\");\n/* harmony import */ var _server_util_renderError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @server/util/renderError */ \"./src/server/util/renderError.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n\n\n\n\n\nconst targetRender = async ({ res, env, lang, assets = {} }) => {\n  if (!env || !lang) {\n    throw new _server_util_renderError__WEBPACK_IMPORTED_MODULE_3__.RenderError(\"server \\u521D\\u59CB\\u5316\\u5931\\u8D25\", 500);\n  }\n  const { stylesPath = [], scriptsPath = [], preloadScriptsPath = [] } = assets;\n  res.send(\n    \"<!doctype html>\" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(\n      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n        _shared__WEBPACK_IMPORTED_MODULE_4__.HTML,\n        {\n          env: JSON.stringify(env),\n          lang: JSON.stringify(lang),\n          link: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generateStyleElements)(stylesPath),\n          preLoad: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generatePreloadScriptElements)(preloadScriptsPath),\n          script: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_2__.generateScriptElements)(scriptsPath)\n        }\n      )\n    )\n  );\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/native/renderP_CSR.tsx?");

/***/ }),

/***/ "./src/server/middleware/renderPage/native/renderSSR.tsx":
/*!***************************************************************!*\
  !*** ./src/server/middleware/renderPage/native/renderSSR.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   targetRender: () => (/* binding */ targetRender)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_common_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @client/common/App */ \"./src/client/common/App.tsx\");\n/* harmony import */ var _server_util_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @server/util/element */ \"./src/server/util/element.ts\");\n/* harmony import */ var _server_util_serverLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @server/util/serverLog */ \"./src/server/util/serverLog.ts\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared */ \"./src/shared/index.ts\");\n/* harmony import */ var _renderCSR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderCSR */ \"./src/server/middleware/renderPage/native/renderCSR.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nconst targetRender = async ({ req, res, store, lang, env, assets = {} }) => {\n  const { StaticRouter: Router } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-router-dom/server.js */ \"react-router-dom/server.js\", 23));\n  const helmetContext = {};\n  const emotionCache = (0,_shared__WEBPACK_IMPORTED_MODULE_9__.createEmotionCache)();\n  const cookieStore = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.cookieStorageManagerSSR)(req.headers.cookie || \"\");\n  const { stylesPath = [], scriptsPath = [], preloadScriptsPath = [] } = assets;\n  const shellMethod = env.isStaticGenerate ? \"onAllReady\" : \"onShellReady\";\n  let error = false;\n  let initial = false;\n  const stream = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToPipeableStream)(\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      _shared__WEBPACK_IMPORTED_MODULE_9__.HTML,\n      {\n        env: JSON.stringify(env),\n        lang: JSON.stringify(lang),\n        cookieStorage: cookieStore,\n        helmetContext,\n        preloadedState: JSON.stringify(store.getState()),\n        link: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_7__.generateStyleElements)(stylesPath),\n        preLoad: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_7__.generatePreloadScriptElements)(preloadScriptsPath),\n        script: (0,_server_util_element__WEBPACK_IMPORTED_MODULE_7__.generateScriptElements)(scriptsPath),\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, { resetCSS: true, theme: _shared__WEBPACK_IMPORTED_MODULE_9__.theme, colorModeManager: cookieStore, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, { store, serverState: store.getState(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Router, { location: req.url, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__.HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_client_common_App__WEBPACK_IMPORTED_MODULE_6__.App, {}) }) }) }) }) })\n      }\n    ),\n    {\n      // bootstrapScripts: scriptsPath.map((s) => (typeof s === \"string\" ? s : s.path ? s.path : null)).filter(Boolean),\n      // to support static generate, for SSR use\n      [shellMethod]() {\n        if (!error) {\n          initial = true;\n          res.statusCode = 200;\n          res.setHeader(\"Content-type\", \"text/html\");\n          stream.pipe(res);\n        }\n      },\n      onShellError(err) {\n        error = true;\n        if (!initial) {\n          if (!env.isStaticGenerate) {\n            (0,_renderCSR__WEBPACK_IMPORTED_MODULE_10__.targetRender)({ req, res, store, lang, env, assets });\n          } else {\n            res.status(500).send(\"server render error!\");\n          }\n        }\n        (0,_server_util_serverLog__WEBPACK_IMPORTED_MODULE_8__.serverLog)(err.stack, \"error\");\n      },\n      onError(err) {\n        error = true;\n        if (!initial) {\n          if (!env.isStaticGenerate) {\n            (0,_renderCSR__WEBPACK_IMPORTED_MODULE_10__.targetRender)({ req, res, store, lang, env, assets });\n          } else {\n            res.status(500).send(\"server render error!\");\n          }\n        }\n        (0,_server_util_serverLog__WEBPACK_IMPORTED_MODULE_8__.serverLog)(err.stack, \"error\");\n      }\n    }\n  );\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/server/middleware/renderPage/native/renderSSR.tsx?");

/***/ }),

/***/ "./src/shared/template/Body.tsx":
/*!**************************************!*\
  !*** ./src/shared/template/Body.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Body: () => (/* binding */ Body)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Body = ({ children, script = [], cookieStorage }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"body\", { children: [\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, { initialColorMode: cookieStorage?.get(), type: \"cookie\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { id: \"__content__\", children }),\n  script.filter(Boolean).map((ele) => ele)\n] });\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/template/Body.tsx?");

/***/ }),

/***/ "./src/shared/template/Head.tsx":
/*!**************************************!*\
  !*** ./src/shared/template/Head.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Head: () => (/* binding */ Head)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Head = ({ env = \"{}\", link = [], preLoad = [], preloadedState = \"{}\", helmetContext: { helmet } = {} }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"head\", { children: [\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", { charSet: \"utf-8\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", { name: \"framework\", content: \"react-ssr-setup\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", { name: \"build-time\", content: \"2023/7/2 23:05:11\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", { name: \"viewport\", content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"base\", { href: \"/\" }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n    helmet?.base.toComponent(),\n    helmet?.title.toComponent(),\n    helmet?.meta.toComponent(),\n    helmet?.link.toComponent(),\n    helmet?.noscript.toComponent(),\n    helmet?.style.toComponent(),\n    helmet?.script.toComponent()\n  ] }),\n  preLoad.filter(Boolean).map((ele) => ele),\n  link.filter(Boolean).map((ele) => ele),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"script\", { id: \"__preload_env__\", type: \"application/json\", dangerouslySetInnerHTML: { __html: `${env}` } }),\n  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"script\", { id: \"__preload_state__\", type: \"application/json\", dangerouslySetInnerHTML: { __html: `${preloadedState}` } })\n] });\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/template/Head.tsx?");

/***/ }),

/***/ "./src/shared/template/index.tsx":
/*!***************************************!*\
  !*** ./src/shared/template/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HTML: () => (/* binding */ HTML)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body */ \"./src/shared/template/Body.tsx\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head */ \"./src/shared/template/Head.tsx\");\n\n\n\nconst HTML = (props) => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"html\", { lang: props.lang || \"\", children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Head__WEBPACK_IMPORTED_MODULE_2__.Head, { ...props }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Body__WEBPACK_IMPORTED_MODULE_1__.Body, { ...props })\n  ] });\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/./src/shared/template/index.tsx?");

/***/ }),

/***/ "../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log.js ***!
  \*********************************************************************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/poll.js?1000":
/*!***************************************************************************************************!*\
  !*** ../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/poll.js?1000 ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?1000\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://@fullstack-nest-react-ssr/frontend/../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@fullstack-nest-react-ssr/axios":
/*!**************************************************!*\
  !*** external "@fullstack-nest-react-ssr/axios" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fullstack-nest-react-ssr/axios");

/***/ }),

/***/ "@fullstack-nest-react-ssr/backend":
/*!****************************************************!*\
  !*** external "@fullstack-nest-react-ssr/backend" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fullstack-nest-react-ssr/backend");

/***/ }),

/***/ "@fullstack-nest-react-ssr/chakra":
/*!***************************************************!*\
  !*** external "@fullstack-nest-react-ssr/chakra" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fullstack-nest-react-ssr/chakra");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "lodash/memoize":
/*!*********************************!*\
  !*** external "lodash/memoize" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("pino");

/***/ }),

/***/ "pino-pretty":
/*!******************************!*\
  !*** external "pino-pretty" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("pino-pretty");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server.js":
/*!*********************************************!*\
  !*** external "react-router-dom/server.js" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server.js");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "reactivity-store":
/*!***********************************!*\
  !*** external "reactivity-store" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("reactivity-store");

/***/ }),

/***/ "vite":
/*!***********************!*\
  !*** external "vite" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("vite");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk prefetch function */
/******/ 	(() => {
/******/ 		__webpack_require__.F = {};
/******/ 		__webpack_require__.E = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.F).map((key) => {
/******/ 				__webpack_require__.F[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("42dad82a2a42d5491e41")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup prefetch */
/******/ 	(() => {
/******/ 		__webpack_require__.O(0, ["main"], () => {
/******/ 			["page-","page-404","page-Bar","page-Baz","page-Dynamic-para","page-Foo","page-Goo","page-I18n","page-newDir"].map(__webpack_require__.E);
/******/ 		}, 5);
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../node_modules/.pnpm/webpack@5.88.1_@swc+core@1.3.62/node_modules/webpack/hot/poll.js?1000");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/entry.ts");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
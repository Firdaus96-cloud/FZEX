"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_firdaus96_Downloads_fzex_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.js */ \"(rsc)/./src/app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"/Users/firdaus96/Downloads/fzex/src/app/api/profile/route.js\",\n    nextConfigOutput,\n    userland: _Users_firdaus96_Downloads_fzex_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmZpcmRhdXM5NiUyRkRvd25sb2FkcyUyRmZ6ZXglMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZmlyZGF1czk2JTJGRG93bmxvYWRzJTJGZnpleCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLz80YWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9maXJkYXVzOTYvRG93bmxvYWRzL2Z6ZXgvc3JjL2FwcC9hcGkvcHJvZmlsZS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZmlsZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2ZpbGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2ZpbGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZmlyZGF1czk2L0Rvd25sb2Fkcy9memV4L3NyYy9hcHAvYXBpL3Byb2ZpbGUvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Byb2ZpbGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.js":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _libs_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/authOptions */ \"(rsc)/./src/libs/authOptions.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    const { _id, name, image, ...otherUserInfo } = data;\n    let filter = {};\n    if (_id) {\n        filter = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session.user.email;\n        filter = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filter);\n    await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.updateOne(filter, {\n        name,\n        image\n    });\n    await _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOneAndUpdate({\n        email: user.email\n    }, otherUserInfo, {\n        upsert: true\n    });\n    return Response.json(true);\n}\nasync function GET(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    let filterUser = {};\n    if (_id) {\n        filterUser = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session?.user?.email;\n        if (!email) {\n            return Response.json({});\n        }\n        filterUser = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filterUser).lean();\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOne({\n        email: user.email\n    }).lean();\n    return Response.json({\n        ...user,\n        ...userInfo\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNaO0FBQ1E7QUFDWDtBQUNXO0FBRXBDLGVBQWVLLElBQUlDLEdBQUc7SUFDM0JILHVEQUFnQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDdEMsTUFBTUMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO0lBQzNCLE1BQU0sRUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxlQUFjLEdBQUdMO0lBRTdDLElBQUlNLFNBQVMsQ0FBQztJQUNkLElBQUlKLEtBQUs7UUFDUEksU0FBUztZQUFDSjtRQUFHO0lBQ2YsT0FBTztRQUNMLE1BQU1LLFVBQVUsTUFBTWQsMkRBQWdCQSxDQUFDSiwwREFBV0E7UUFDbEQsTUFBTW1CLFFBQVFELFFBQVFFLElBQUksQ0FBQ0QsS0FBSztRQUNoQ0YsU0FBUztZQUFDRTtRQUFLO0lBQ2pCO0lBRUEsTUFBTUMsT0FBTyxNQUFNbkIsOENBQUlBLENBQUNvQixPQUFPLENBQUNKO0lBQ2hDLE1BQU1oQiw4Q0FBSUEsQ0FBQ3FCLFNBQVMsQ0FBQ0wsUUFBUTtRQUFDSDtRQUFNQztJQUFLO0lBQ3pDLE1BQU1iLHNEQUFRQSxDQUFDcUIsZ0JBQWdCLENBQUM7UUFBQ0osT0FBTUMsS0FBS0QsS0FBSztJQUFBLEdBQUdILGVBQWU7UUFBQ1EsUUFBTztJQUFJO0lBRS9FLE9BQU9DLFNBQVNiLElBQUksQ0FBQztBQUN2QjtBQUVPLGVBQWVjLElBQUlwQixHQUFHO0lBQzNCSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBRXRDLE1BQU1pQixNQUFNLElBQUlDLElBQUl0QixJQUFJcUIsR0FBRztJQUMzQixNQUFNZCxNQUFNYyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUVqQyxJQUFJQyxhQUFhLENBQUM7SUFDbEIsSUFBSWxCLEtBQUs7UUFDUGtCLGFBQWE7WUFBQ2xCO1FBQUc7SUFDbkIsT0FBTztRQUNMLE1BQU1LLFVBQVUsTUFBTWQsMkRBQWdCQSxDQUFDSiwwREFBV0E7UUFDbEQsTUFBTW1CLFFBQVFELFNBQVNFLE1BQU1EO1FBQzdCLElBQUksQ0FBQ0EsT0FBTztZQUNWLE9BQU9NLFNBQVNiLElBQUksQ0FBQyxDQUFDO1FBQ3hCO1FBQ0FtQixhQUFhO1lBQUNaO1FBQUs7SUFDckI7SUFFQSxNQUFNQyxPQUFPLE1BQU1uQiw4Q0FBSUEsQ0FBQ29CLE9BQU8sQ0FBQ1UsWUFBWUMsSUFBSTtJQUNoRCxNQUFNQyxXQUFXLE1BQU0vQixzREFBUUEsQ0FBQ21CLE9BQU8sQ0FBQztRQUFDRixPQUFNQyxLQUFLRCxLQUFLO0lBQUEsR0FBR2EsSUFBSTtJQUVoRSxPQUFPUCxTQUFTYixJQUFJLENBQUM7UUFBQyxHQUFHUSxJQUFJO1FBQUUsR0FBR2EsUUFBUTtJQUFBO0FBRTVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzPzEzNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRoT3B0aW9uc30gZnJvbSBcIkAvbGlicy9hdXRoT3B0aW9uc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHtVc2VySW5mb30gZnJvbSBcIkAvbW9kZWxzL1VzZXJJbmZvXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3Qge19pZCwgbmFtZSwgaW1hZ2UsIC4uLm90aGVyVXNlckluZm99ID0gZGF0YTtcblxuICBsZXQgZmlsdGVyID0ge307XG4gIGlmIChfaWQpIHtcbiAgICBmaWx0ZXIgPSB7X2lkfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgY29uc3QgZW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgZmlsdGVyID0ge2VtYWlsfTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVyKTtcbiAgYXdhaXQgVXNlci51cGRhdGVPbmUoZmlsdGVyLCB7bmFtZSwgaW1hZ2V9KTtcbiAgYXdhaXQgVXNlckluZm8uZmluZE9uZUFuZFVwZGF0ZSh7ZW1haWw6dXNlci5lbWFpbH0sIG90aGVyVXNlckluZm8sIHt1cHNlcnQ6dHJ1ZX0pO1xuXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgY29uc3QgX2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ19pZCcpO1xuXG4gIGxldCBmaWx0ZXJVc2VyID0ge307XG4gIGlmIChfaWQpIHtcbiAgICBmaWx0ZXJVc2VyID0ge19pZH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe30pO1xuICAgIH1cbiAgICBmaWx0ZXJVc2VyID0ge2VtYWlsfTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVyVXNlcikubGVhbigpO1xuICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJJbmZvLmZpbmRPbmUoe2VtYWlsOnVzZXIuZW1haWx9KS5sZWFuKCk7XG5cbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oey4uLnVzZXIsIC4uLnVzZXJJbmZvfSk7XG5cbn0iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJVc2VyIiwiVXNlckluZm8iLCJtb25nb29zZSIsImdldFNlcnZlclNlc3Npb24iLCJQVVQiLCJyZXEiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsImRhdGEiLCJqc29uIiwiX2lkIiwibmFtZSIsImltYWdlIiwib3RoZXJVc2VySW5mbyIsImZpbHRlciIsInNlc3Npb24iLCJlbWFpbCIsInVzZXIiLCJmaW5kT25lIiwidXBkYXRlT25lIiwiZmluZE9uZUFuZFVwZGF0ZSIsInVwc2VydCIsIlJlc3BvbnNlIiwiR0VUIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmlsdGVyVXNlciIsImxlYW4iLCJ1c2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/authOptions.js":
/*!*********************************!*\
  !*** ./src/libs/authOptions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_6__.connect(process.env.MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9hdXRoT3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1g7QUFDNkI7QUFDVjtBQUNEO0FBQzNCO0FBQ1M7QUFFOUIsTUFBTU8sY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxTQUFTUixxRUFBY0EsQ0FBQ0osMERBQWFBO0lBQ3JDYSxXQUFXO1FBQ1RWLHNFQUFjQSxDQUFDO1lBQ2JXLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssZ0JBQWdCO1lBQ3RDQyxjQUFjUCxRQUFRQyxHQUFHLENBQUNPLG9CQUFvQjtRQUNoRDtRQUNBZiwyRUFBbUJBLENBQUM7WUFDbEJnQixNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBbUI7Z0JBQ3hFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVztnQkFDekIsTUFBTUMsUUFBUUQsYUFBYUM7Z0JBQzNCLE1BQU1JLFdBQVdMLGFBQWFLO2dCQUU5Qm5CLDZDQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNrQixTQUFTO2dCQUN0QyxNQUFNQyxPQUFPLE1BQU01Qiw4Q0FBSUEsQ0FBQzZCLE9BQU8sQ0FBQztvQkFBRVQ7Z0JBQU07Z0JBQ3hDLE1BQU1VLGFBQWFGLFFBQVF4Qix5REFBa0IsQ0FBQ29CLFVBQVVJLEtBQUtKLFFBQVE7Z0JBRXJFLElBQUlNLFlBQVk7b0JBQ2QsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9saWJzL2F1dGhPcHRpb25zLmpzP2RkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGlicy9tb25nb0Nvbm5lY3RcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL21vZGVscy9Vc2VyJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgaWQ6ICdjcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInRlc3RAZXhhbXBsZS5jb21cIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmIChwYXNzd29yZE9rKSB7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxufTtcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiVXNlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiYmNyeXB0IiwibW9uZ29vc2UiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbm5lY3QiLCJNT05HT19VUkwiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkT2siLCJjb21wYXJlU3luYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/authOptions.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\nconst { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtHQUFrRztBQUNsRyxNQUFNLEVBQUVBLFdBQVcsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyx3QkFBUztBQUV6QyxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQzFCLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLE1BQU1DLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztBQUNqQyxNQUFNRyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlSLFlBQVlNLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIilcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT19VUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTFxuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU07UUFBQ0MsTUFBTUM7SUFBTTtJQUNuQkMsT0FBTztRQUFDRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSTtJQUNsREMsVUFBVTtRQUFDTCxNQUFNQztJQUFNO0lBQ3ZCSyxPQUFPO1FBQUNOLE1BQU1DO0lBQU07QUFDdEIsR0FBRztJQUFDTSxZQUFZO0FBQUk7QUFFYixNQUFNQyxPQUFPWiw0Q0FBTUEsRUFBRVksUUFBUWIsK0NBQUtBLENBQUMsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXG4gIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfSxcbiAgaW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNRyxpQkFBaUIsSUFBSUQsNENBQU1BLENBQUM7SUFDaENFLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3BDQyxlQUFlO1FBQUNILE1BQU1DO0lBQU07SUFDNUJHLFlBQVk7UUFBQ0osTUFBTUM7SUFBTTtJQUN6QkksTUFBTTtRQUFDTCxNQUFNQztJQUFNO0lBQ25CSyxTQUFTO1FBQUNOLE1BQU1DO0lBQU07SUFDdEJNLE9BQU87UUFBQ1AsTUFBTUM7SUFBTTtJQUNwQk8sT0FBTztRQUFDUixNQUFNUztRQUFTQyxTQUFTO0lBQUs7QUFDdkMsR0FBRztJQUFDQyxZQUFZO0FBQUk7QUFFYixNQUFNQyxXQUFXaEIsNENBQU1BLEVBQUVnQixZQUFZakIsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzP2RlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VySW5mb1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxuICBzdHJlZXRBZGRyZXNzOiB7dHlwZTogU3RyaW5nfSxcbiAgcG9zdGFsQ29kZToge3R5cGU6IFN0cmluZ30sXG4gIGNpdHk6IHt0eXBlOiBTdHJpbmd9LFxuICBjb3VudHJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgcGhvbmU6IHt0eXBlOiBTdHJpbmd9LFxuICBhZG1pbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IG1vZGVscz8uVXNlckluZm8gfHwgbW9kZWwoJ1VzZXJJbmZvJywgVXNlckluZm9TY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJJbmZvU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffirdaus96%2FDownloads%2Ffzex&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
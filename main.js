/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/hit.svg */ \"./src/assets/icons/hit.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/miss.svg */ \"./src/assets/icons/miss.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n@media (max-width: 900px) {\\n  :root {\\n    --main-dir: column;\\n  }\\n}\\n@media (min-width: 900px) {\\n  :root {\\n    --main-dir: row;\\n  }\\n}\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  background: #335145;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\nheader {\\n  background-color: #335145;\\n  height: 13vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: 0px 2px 10px #000;\\n  position: relative;\\n  z-index: 1;\\n}\\nheader h1 {\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n  font-size: 4rem;\\n  font-weight: normal;\\n}\\n\\nfooter {\\n  background-color: #335145;\\n  height: 5vh;\\n  width: 100%;\\n  box-shadow: 0px -2px 10px #000;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  z-index: 1;\\n}\\nfooter a {\\n  transform: scale(0.7);\\n}\\nfooter a img {\\n  transform: rotate(180deg);\\n  transition: transform 500ms;\\n}\\nfooter a img:hover {\\n  transform: rotate(0deg);\\n}\\n\\nmain {\\n  position: relative;\\n  flex-grow: 1;\\n  width: 100%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: var(--main-dir);\\n  justify-content: center;\\n  align-items: center;\\n  gap: min(150px, 10vh);\\n  padding-top: 50px;\\n  padding-bottom: 50px;\\n}\\n\\n#player-one-wrap, #player-two-wrap {\\n  padding: min(60px, 5vw);\\n  background-color: #828c51;\\n  box-shadow: 0px 5px 10px -2px #000;\\n  border-radius: 5px;\\n}\\n#player-one-wrap p, #player-two-wrap p {\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n}\\n\\n#player-one-wrap.turn, #player-two-wrap.turn {\\n  outline: none;\\n}\\n\\n#player-one-wrap.turn #board-one, #player-two-wrap.turn #board-two {\\n  border-bottom: 4px solid #828c51;\\n}\\n\\n#board-one, #board-two {\\n  border-bottom: 4px solid #ce2415;\\n  width: min-content;\\n  height: min-content;\\n  background: #d6f3ba;\\n  box-shadow: inset 0px 0px 10px -2px #000;\\n}\\n#board-one div, #board-two div {\\n  display: flex;\\n}\\n#board-one div div, #board-two div div {\\n  width: 30px;\\n  height: 30px;\\n  border: 1px solid #1e352f;\\n  transition: background 500ms;\\n}\\n#board-one div div:hover, #board-two div div:hover {\\n  border: 1px solid #ce2415;\\n}\\n\\n#board-two {\\n  cursor: crosshair;\\n}\\n\\n#board-one div div:hover {\\n  border: 1px solid #1e352f;\\n}\\n\\n.hit {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n.hit:hover {\\n  border: 1px solid #1e352f !important;\\n}\\n\\n#board-one .ok, #board-one .hit {\\n  background-color: #1e352f;\\n}\\n\\n.miss {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n}\\n.miss:hover {\\n  border: 1px solid #1e352f !important;\\n}\\n\\n.sunk {\\n  background-color: #ce2415;\\n}\\n\\n#board-one .sunk {\\n  background-color: #ce2415 !important;\\n}\\n\\n.hidden {\\n  display: none !important;\\n}\\n\\n#end-screen {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(30, 53, 47, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#end-screen div {\\n  padding: 60px;\\n  background-color: #828c51;\\n  border-radius: 5px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n  box-shadow: 0px 10px 10px #000;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#end-screen div > p {\\n  font-size: 1.5rem;\\n}\\n#end-screen div > button {\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n  padding: 5px 10px;\\n  font-size: 1.2rem;\\n  border-radius: 5px;\\n  background-color: #d6f3ba;\\n}\\n\\n#new-screen {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #1e352f;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#new-screen > div:not(#new-board) {\\n  padding: 30px;\\n  background-color: #828c51;\\n  border-radius: 5px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n  box-shadow: 0px 10px 10px #000;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#new-screen > div > p {\\n  font-size: 1.5rem;\\n}\\n#new-screen .buttons {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n#new-screen .buttons button {\\n  cursor: grab;\\n  font-size: 1.3rem;\\n  padding: 5px 10px;\\n  background-color: #d6f3ba;\\n  font-family: \\\"Saira Stencil One\\\", cursive;\\n  border-radius: 5px;\\n}\\n\\n#new-board {\\n  background-color: #d6f3ba;\\n  display: flex;\\n  flex-direction: column;\\n  border: 1px solid #335145;\\n}\\n#new-board > div {\\n  display: flex;\\n  flex-direction: row;\\n}\\n#new-board > div > div {\\n  width: 30px;\\n  height: 30px;\\n  border: 1px solid #335145;\\n}\\n#new-board > div > div:hover {\\n  background-color: #335145;\\n}\\n#new-board > div > div.ok {\\n  background-color: #1e352f;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/observer */ \"./src/modules/observer.js\");\n/* harmony import */ var _assets_icons_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/GitHub-Mark-32px.png */ \"./src/assets/icons/GitHub-Mark-32px.png\");\n\n\n\n\n\n\n\nconst game = (function () {\n  const setPlayers = function () {\n    const one = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('user')\n    const two = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('computer')\n    return { one, two }\n  }\n\n  const switchTurn = function () {\n    turn = turn === players.one ? players.two : players.one\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchTurn()\n  }\n\n  const initGame = function (players) {\n    const playerOne = players.one\n    const playerTwo = players.two\n\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDom([elements.boardOne, elements.boardTwo])\n    const one = { player: playerOne, board: elements.boardOne }\n    const two = { player: playerTwo, board: elements.boardTwo }\n\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showNewScreen()\n\n    return { one, two }\n  }\n\n  const newShip = function (player, domboard, index, length, axis) {\n    const ship = (0,_modules_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(length)\n    player.gameboard.placeShip(index, ship, axis)\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderShips(player.gameboard.board, domboard)\n  }\n\n  const handleAttack = function (data) {\n    if (data[0] === players.two) {\n      players.two.gameboard.receiveAttack(data[1])\n    } else if (data[0] === players.one) {\n      players.one.gameboard.receiveAttack(data[1])\n    }\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateDom(players)\n  }\n\n  const handleSelection = function (event) {\n    const target = event.target\n    const targetIndex = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCellIndex(target)\n    if (boards.two.board === event.composedPath()[2]) {\n      if (turn === players.two);\n      else {\n        if (target.classList[1] === 'miss' || target.classList[2] === 'hit')\n          console.log('Already attacked this position!')\n        else {\n          players.one.attack(targetIndex, players.two)\n          switchTurn()\n          setTimeout(() => {\n            players.two.play(players.one.gameboard.board, players.one)\n            switchTurn()\n          }, 1000)\n        }\n      }\n    }\n  }\n\n  const handleEndgame = function (data) {\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showEndScreen()\n    if (turn === players.one) elements.endMessage.textContent = `You Win!`\n    else elements.endMessage.textContent = 'You Lose!'\n  }\n\n  const resetGame = function () {\n    players = setPlayers()\n    boards = initGame(players)\n    turn = players.one\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideEndScreen()\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showNewScreen()\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].generateBoard(elements.newBoard)\n  }\n\n  const placeEnemyShips = function () {\n    let newPlace\n    let axis = 'x'\n    let remaining = 5\n    while (remaining > 0) {\n      newPlace = [\n        Math.floor(Math.random() * 10),\n        Math.floor(Math.random() * 10),\n      ]\n      try {\n        newShip(players.two, elements.boardTwo, newPlace, remaining, axis)\n        remaining--\n        axis = axis === 'x' ? 'y' : 'x'\n      } catch {\n        continue\n      }\n    }\n  }\n\n  const handleStart = function () {\n    if (players.one.gameboard.ships.length < 5) return\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideNewScreen()\n    placeEnemyShips()\n    _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderShips(players.one.gameboard.board, elements.boardOne)\n  }\n\n  const handleShipPlacement = function (data) {\n    if (players.one.gameboard.ships.length >= 4) {\n      if (elements.newButton.disabled) elements.newButton.disabled = false\n      if (players.one.gameboard.ships.length === 5) return\n    }\n    const target = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCellIndex(data.composedPath()[0])\n    const axis =\n      elements.newAxis.textContent[\n        elements.newAxis.textContent.length - 1\n      ].toLowerCase()\n    const length = players.one.gameboard.ships.length + 1\n    try {\n      newShip(players.one, elements.newBoard, target, length, axis)\n    } catch {}\n  }\n\n  const elements = _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].elements\n\n  let players = setPlayers()\n\n  let turn = players.one\n\n  let boards = initGame(players)\n\n  _modules_observer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe('attack', handleAttack)\n\n  _modules_observer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe('cellSelection', handleSelection)\n\n  _modules_observer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe('allShipsSunk', handleEndgame)\n\n  _modules_observer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe('placeShip', handleShipPlacement)\n\n  elements.endButton.addEventListener('click', resetGame)\n\n  elements.newButton.addEventListener('click', handleStart)\n\n  elements.newAxis.addEventListener('click', _modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchAxis)\n\n  elements.ghIcon.src = _assets_icons_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_5__\n\n  return {}\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/modules/observer.js\");\n\n\nconst dom = (function () {\n  const generateBoard = function (board) {\n    board.replaceChildren()\n    for (let i = 0; i < 10; i++) {\n      const col = document.createElement('div')\n      for (let r = 0; r < 10; r++) {\n        const row = document.createElement('div')\n        row.classList.add(`y${i}x${r}`)\n        row.addEventListener('click', (e) => {\n          if (e.composedPath()[2] === document.getElementById('new-board')) {\n            _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('placeShip', e)\n          } else _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('cellSelection', e)\n        })\n        col.append(row)\n      }\n      board.append(col)\n    }\n    return board\n  }\n\n  const startDom = function (elements) {\n    elements.forEach((x) => generateBoard(x))\n  }\n\n  const renderShips = function (gameboard, domboard) {\n    for (let y = 0; y < 10; y++) {\n      for (let x = 0; x < 10; x++) {\n        if (typeof gameboard[y][x] === 'object') {\n          domboard.children[y].children[x].classList.add(\n            `ship${gameboard[y][x].ship.body.length}`\n          )\n\n          if (gameboard[y][x].section.status === 'hit') {\n            domboard.children[y].children[x].classList.remove('ok')\n            domboard.children[y].children[x].classList.add('hit')\n          } else domboard.children[y].children[x].classList.add('ok')\n          if (gameboard[y][x].ship.isSunk() === true) {\n            domboard.children[y].children[x].classList.add('sunk')\n          }\n        } else if (gameboard[y][x] === 0) {\n          domboard.children[y].children[x].classList.add('miss')\n        }\n      }\n    }\n  }\n\n  const elements = {\n    boardOne: document.getElementById('board-one'),\n    boardTwo: document.getElementById('board-two'),\n    playerOneWrap: document.getElementById('player-one-wrap'),\n    playerTwoWrap: document.getElementById('player-two-wrap'),\n    endScreen: document.getElementById('end-screen'),\n    endMessage: document.querySelector('#end-screen p'),\n    endButton: document.querySelector('#end-screen button'),\n    newScreen: document.getElementById('new-screen'),\n    newBoard: document.getElementById('new-board'),\n    newAxis: document.getElementById('axis-button'),\n    newButton: document.getElementById('start-button'),\n    ghIcon: document.getElementById('gh-icon'),\n  }\n\n  const switchTurn = function () {\n    elements.playerOneWrap.classList.toggle('turn')\n    elements.playerTwoWrap.classList.toggle('turn')\n  }\n\n  const hideNewScreen = function () {\n    elements.newScreen.classList.add('hidden')\n  }\n  const showNewScreen = function () {\n    elements.newScreen.classList.remove('hidden')\n  }\n  const hideEndScreen = function () {\n    elements.endScreen.classList.add('hidden')\n  }\n  const showEndScreen = function () {\n    elements.endScreen.classList.remove('hidden')\n  }\n\n  const updateDom = function (players) {\n    renderShips(players.one.gameboard.board, elements.boardOne)\n    renderShips(players.two.gameboard.board, elements.boardTwo)\n  }\n\n  const getCellIndex = function (target) {\n    return [+target.classList[0][1], +target.classList[0][3]]\n  }\n\n  const switchAxis = function () {\n    if (\n      elements.newAxis.textContent[elements.newAxis.textContent.length - 1] ===\n      'X'\n    )\n      elements.newAxis.textContent = 'Axis: Y'\n    else elements.newAxis.textContent = 'Axis: X'\n  }\n\n  generateBoard(elements.newBoard)\n\n  return {\n    startDom,\n    renderShips,\n    generateBoard,\n    elements,\n    switchTurn,\n    hideNewScreen,\n    showNewScreen,\n    hideEndScreen,\n    showEndScreen,\n    updateDom,\n    getCellIndex,\n    switchAxis,\n  }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/modules/observer.js\");\n\n\nconst Gameboard = function () {\n  const makeBoard = function () {\n    const board = []\n    for (let i = 0; i < 10; i++) {\n      board.push(Array(10))\n    }\n    return board\n  }\n\n  const board = makeBoard()\n  const ships = []\n\n  const placeShip = function (index, ship, axis = 'x') {\n    if (axis !== 'x') axis = 'y'\n    let Y = index[0]\n    let X = index[1]\n    const shipLength = ship.body.length\n\n    if (Y < 0 || Y > 9)\n      throw new Error('Cannot place ship outside board bounds!')\n    if (X < 0 || X > 9)\n      throw new Error('Cannot place ship outside board bounds!')\n\n    if (axis === 'y') {\n      if (Y > 9 - ship.body.length + 1)\n        throw new Error('Ship is too big for this position!')\n\n      let y = Y\n      for (let i = 0; i < shipLength; i++) {\n        if (typeof board[y][X] === 'object') {\n          throw new Error('Space already has a ship!')\n        }\n        y++\n      }\n    } else {\n      if (X > 9 - ship.body.length + 1)\n        throw new Error('Ship is too big for this position!')\n\n      let x = X\n      for (let i = 0; i < shipLength; i++) {\n        if (typeof board[Y][x] === 'object') {\n          throw new Error('Space already has a ship!')\n        }\n        x++\n      }\n    }\n\n    ships.push(ship)\n\n    for (let i = 0; i < shipLength; i++) {\n      board[Y][X] = { ship, section: ship.body[i] }\n      axis === 'x' ? X++ : Y++\n    }\n  }\n\n  const receiveAttack = function (index) {\n    const target = board[index[0]][index[1]]\n\n    if (target === undefined) {\n      board[index[0]][index[1]] = 0\n    } else {\n      target.section.status = 'hit'\n      if (target.ship.isSunk()) {\n        if (ships.every((x) => x.isSunk()))\n          return _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('allShipsSunk', this)\n        return _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('shipSunk', target.ship)\n      }\n    }\n  }\n\n  return { board, ships, placeShip, receiveAttack }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/observer.js":
/*!*********************************!*\
  !*** ./src/modules/observer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst observer = {\n  events: {},\n  data: {},\n\n  subscribe: function (eventName, fn) {\n    this.events[eventName] = this.events[eventName] || []\n    this.events[eventName].push(fn)\n  },\n\n  unsubscribe: function (eventName, fn) {\n    if (this.events[eventName]) {\n      for (let i = 0; i < this.events[eventName].length; i++) {\n        if (this.events[eventName][i] === fn) {\n          this.events[eventName].splice(i, 1)\n          break\n        }\n      }\n    }\n  },\n\n  publish: function (eventName, data) {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach(function (fn) {\n        fn(data)\n      })\n    }\n  },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observer);\n\n\n//# sourceURL=webpack://battleship/./src/modules/observer.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/modules/observer.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\n\nconst Player = function (type) {\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n  const attack = function (index, enemy) {\n    if (index[0] < 0 || index[0] > 9 || index[1] < 0 || index[1] > 9)\n      throw new Error('Cannot attack outside the board!')\n\n    return _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('attack', [enemy, index])\n  }\n\n  let firstHit\n  let nextIndex = []\n\n  const getAdjacent = function (index) {\n    const array = []\n    array.push([index[0], index[1] - 1])\n    array.push([index[0], index[1] + 1])\n    array.push([index[0] - 1, index[1]])\n    array.push([index[0] + 1, index[1]])\n    return array\n  }\n\n  const play = function (enemyBoard, enemy) {\n    if (type === 'user') throw new Error('Users cannot use play method!')\n\n    if (firstHit && enemyBoard[firstHit[0]][firstHit[1]].ship.isSunk()) {\n      firstHit = undefined\n      nextIndex = []\n    }\n\n    let index\n\n    while (true) {\n      if (nextIndex.length > 0) {\n        index = nextIndex.pop()\n        if (index[0] > 9 || index[0] < 0 || index[1] > 9 || index[1] < 0)\n          continue\n      } else {\n        index = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]\n      }\n\n      const target = enemyBoard[index[0]][index[1]]\n\n      if (target === undefined) {\n        break\n      }\n      if (typeof target === 'object' && target.section.status === 'ok') {\n        if (!firstHit) firstHit = index\n        const newTargets = getAdjacent(index)\n        newTargets.forEach((x) => nextIndex.push(x))\n        break\n      }\n    }\n    return attack(index, enemy)\n  }\n\n  return { gameboard, type, attack, play }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = function (length) {\n  if (length < 1) length = 1\n  if (length > 5) length = 5\n\n  const Section = function () {\n    const status = 'ok'\n    return { status }\n  }\n\n  const makeBody = function (length) {\n    const body = []\n    for (let i = 0; i < length; i++) {\n      body.push(Section())\n    }\n    return body\n  }\n\n  const body = makeBody(length)\n\n  const hit = function (index) {\n    body[index].status = 'hit'\n  }\n\n  const isSunk = function () {\n    return body.every((x) => x.status === 'hit')\n  }\n\n  return { length, body, hit, isSunk }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/assets/icons/GitHub-Mark-32px.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/GitHub-Mark-32px.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0035c307a36c17babb8d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/icons/GitHub-Mark-32px.png?");

/***/ }),

/***/ "./src/assets/icons/hit.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/hit.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88aadc1362b424266ff7.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/icons/hit.svg?");

/***/ }),

/***/ "./src/assets/icons/miss.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/miss.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6320d99a37a887148e09.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/icons/miss.svg?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;
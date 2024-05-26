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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'Arial', sans-serif;\n    background: linear-gradient(to right, #4facfe, #00f2fe);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    color: #333;\n}\n\n.weatherContainer {\n    background: rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    text-align: center;\n    width: 300px;\n    margin: 0 auto;\n    transition: transform 0.3s;\n}\n\n.weatherContainer:hover {\n    transform: scale(1.05);\n}\n\n.searchContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap; \n    margin-bottom: 20px; \n}\n\n.search-input {\n    padding: 10px;\n    width: calc(100% - 120px); \n    border: 1px solid #ccc;\n    border-radius: 5px 0 0 5px;\n    margin: 0;\n}\n\n.search-button {\n    padding: 10px 20px; \n    border: none;\n    border-radius: 0 5px 5px 0;\n    background-color: #4facfe;\n    color: white;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.search-button:hover {\n    background-color: #00f2fe;\n}\n\n.temp {\n    font-size: 2em;\n    font-weight: bold;\n    margin: 20px 0; \n}\n\n.condition-text {\n    font-size: 1.2em;\n    color: #555;\n}\n\n.location-text, .country-text {\n    font-size: 1em;\n    color: #333;\n}\n\n.weather-icon {\n    width: 100px;\n    height: 100px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/footer-component-by-rajat-porwal/src/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/footer-component-by-rajat-porwal/src/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFooter: () => (/* binding */ addFooter)\n/* harmony export */ });\nfunction addFooter() {\n   \n    var footer = document.createElement('footer');\n    var paragraph = document.createElement('p');\n    var text1 = document.createElement('span');\n    text1.textContent = 'Built by ';\n    \n    var profileLinkText = document.createElement('a');\n    profileLinkText.textContent = 'Rajat Porwal';\n    profileLinkText.href = 'https://github.com/rajat-porwal';\n    \n    var text2 = document.createElement('span');\n    text2.textContent = ' | ';\n    \n    var linkedinLink = document.createElement('span');\n    var sourceCodeAnchor = document.createElement('a');\n    sourceCodeAnchor.textContent = 'LinkedIn';\n    sourceCodeAnchor.href = 'https://www.linkedin.com/in/rajatporwal/';\n\n    linkedinLink.appendChild(sourceCodeAnchor);\n    paragraph.appendChild(text1);\n    paragraph.appendChild(profileLinkText);\n    paragraph.appendChild(text2);\n    paragraph.appendChild(linkedinLink);\n    footer.appendChild(paragraph);\n   \n    document.body.appendChild(footer);\n\n    var style = document.createElement('style');\n    style.textContent = `\n        footer {\n            background-color: #2c3e50; \n            color: #ffffff; \n            padding: 20px; \n            text-align: center;\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); \n            transition: background-color 0.3s ease; \n        }\n        \n        footer p {\n            margin: 0;\n        }\n        \n        footer a {\n            margin-left: 3px;\n            margin-right: 3px;\n            color: #3498db; \n            text-decoration: none;\n            transition: color 0.3s ease; \n        }\n        \n        footer a:hover {\n            color: #2980b9; \n            text-decoration: underline;\n        }\n    \n    `;\n    document.head.appendChild(style);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/footer-component-by-rajat-porwal/src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Asset_clear_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset/clear.jpg */ \"./src/Asset/clear.jpg\");\n/* harmony import */ var _Asset_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asset/cloudy.jpg */ \"./src/Asset/cloudy.jpg\");\n/* harmony import */ var _Asset_rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asset/rain.jpg */ \"./src/Asset/rain.jpg\");\n/* harmony import */ var _Asset_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Asset/thunderstorm.jpg */ \"./src/Asset/thunderstorm.jpg\");\n/* harmony import */ var _Asset_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Asset/snow.jpg */ \"./src/Asset/snow.jpg\");\n/* harmony import */ var _Asset_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset/main-background.jpg */ \"./src/Asset/main-background.jpg\");\n/* harmony import */ var _node_modules_footer_component_by_rajat_porwal_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/footer-component-by-rajat-porwal/src */ \"./node_modules/footer-component-by-rajat-porwal/src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\nconst currentTemp = document.getElementById('currentTemp');\nconst condition = document.getElementById('condition');\nconst locationElem = document.getElementById('location');\nconst country = document.getElementById('country');\nconst icon = document.getElementById('icon');\nconst searchLocation = document.getElementById('search');\nconst btn = document.getElementById('btn');\nconst FahrenheitBtn = document.getElementById('cToFBtn');\n\ncurrentTemp.classList.add('temp');\ncondition.classList.add('condition-text');\nlocationElem.classList.add('location-text');\ncountry.classList.add('country-text');\nicon.classList.add('weather-icon');\nsearchLocation.classList.add('search-input');\nbtn.classList.add('search-button');\nFahrenheitBtn.classList.add('temp-toggle');\n\nfunction weatherFetcher(location) {\n    return new Promise((resolve, reject) => {\n        const apiKey = '57bfa963400a4f5d9fc124848241705';\n        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;\n        fetch(url, { mode: 'cors' })\n            .then(response => {\n                if (response.ok) {\n                    return response.json();\n                } else {\n                    reject('Network Error');\n                }\n            })\n            .then(response => {\n                resolve(response);\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n\nfunction celsiusToFahrenheit(celsius) {\n    return (celsius * 9 / 5) + 32;\n}\n\nfunction fahrenheitToCelsius(fahrenheit) {\n    return (fahrenheit - 32) * 5 / 9;\n}\n\nfunction displayWeather(response) {\n    currentTemp.innerText = response.current.temp_c + '°C';\n    condition.innerText = response.current.condition.text;\n    locationElem.innerText = response.location.name + ',';\n    country.innerText = response.location.country;\n    icon.src = 'https:' + response.current.condition.icon;\n\n    function setBackground(image) {     //add this function because images were not rendering correctly so create the whole function\n        document.body.style.backgroundImage = `url(${image})`;\n        document.body.style.backgroundSize = 'cover';\n        document.body.style.backgroundPosition = 'center';\n        document.body.style.backgroundRepeat = 'no-repeat';\n        document.body.style.width = '100vw';\n        document.body.style.height = '100vh';\n        document.body.style.margin = '0';\n        document.body.style.padding = '0';\n        document.body.style.overflow = 'hidden';\n    }\n\n    switch (condition.innerText) {\n        case 'Clear':\n        case 'Sunny':\n            setBackground(_Asset_clear_jpg__WEBPACK_IMPORTED_MODULE_0__);\n            break;\n        case 'Partly cloudy':\n        case 'Cloudy':\n        case 'Overcast':\n            setBackground(_Asset_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__);\n            break;\n        case 'Mist':\n        case 'Patchy rain possible':\n        case 'Patchy sleet possible':\n        case 'Patchy freezing drizzle possible':\n        case 'Fog':\n        case 'Freezing fog':\n        case 'Patchy light drizzle':\n        case 'Light drizzle':\n        case 'Freezing drizzle':\n        case 'Heavy freezing drizzle':\n        case 'Patchy light rain':\n        case 'Light rain':\n        case 'Moderate rain at times':\n        case 'Moderate rain':\n        case 'Heavy rain at times':\n        case 'Heavy rain':\n        case 'Light freezing rain':\n        case 'Moderate or heavy freezing rain':\n        case 'Light rain shower':\n        case 'Moderate or heavy rain shower':\n        case 'Torrential rain shower':\n        case 'Patchy light rain with thunder':\n        case 'Moderate or heavy rain with thunder':\n            setBackground(_Asset_rain_jpg__WEBPACK_IMPORTED_MODULE_2__);\n            break;\n        case 'Thundery outbreaks possible':\n        case 'Patchy light snow with thunder':\n        case 'Moderate or heavy snow with thunder':\n            setBackground(_Asset_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__);\n            break;\n        case 'Blowing snow':\n        case 'Blizzard':\n        case 'Light sleet':\n        case 'Moderate or heavy sleet':\n        case 'Light sleet showers':\n        case 'Moderate or heavy sleet showers':\n        case 'Light snow':\n        case 'Patchy light snow':\n        case 'Patchy moderate snow':\n        case 'Moderate snow':\n        case 'Patchy heavy snow':\n        case 'Heavy snow':\n        case 'Light snow showers':\n        case 'Moderate or heavy snow showers':\n        case 'Light showers of ice pellets':\n        case 'Moderate or heavy showers of ice pellets':\n        case 'Ice pellets':\n            setBackground(_Asset_snow_jpg__WEBPACK_IMPORTED_MODULE_4__);\n            break;\n        default:\n            setBackground(_Asset_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__);\n            break;\n    }\n}\n\nfunction weatherDisplay() {\n    weatherFetcher('Rohtak')\n        .then(response => {\n            displayWeather(response);\n        })\n        .catch(error => {\n            alert(error);\n        });\n\n    btn.addEventListener('click', () => {\n        const searchLocationValue = searchLocation.value;\n        weatherFetcher(searchLocationValue)\n            .then(response => {\n                displayWeather(response);\n            })\n            .catch(error => {\n                alert(error.message);\n            });\n    });\n\n    FahrenheitBtn.addEventListener('click', () => {\n        const tempText = currentTemp.innerText;\n        const tempValue = parseFloat(tempText);\n\n        if (FahrenheitBtn.classList.contains('celsius')) {\n            currentTemp.innerText = celsiusToFahrenheit(tempValue).toFixed(1) + '°F';\n            FahrenheitBtn.classList.remove('celsius');\n            FahrenheitBtn.classList.add('fahrenheit');\n            FahrenheitBtn.innerText = 'Convert to Celsius';\n        } else {\n            currentTemp.innerText = fahrenheitToCelsius(tempValue).toFixed(1) + '°C';\n            FahrenheitBtn.classList.remove('fahrenheit');\n            FahrenheitBtn.classList.add('celsius');\n            FahrenheitBtn.innerText = 'Convert to Fahrenheit';\n        }\n    });\n}\n\nweatherDisplay();\n(0,_node_modules_footer_component_by_rajat_porwal_src__WEBPACK_IMPORTED_MODULE_6__.addFooter)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/Asset/clear.jpg":
/*!*****************************!*\
  !*** ./src/Asset/clear.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56ec32f198d5390879aa.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/clear.jpg?");

/***/ }),

/***/ "./src/Asset/cloudy.jpg":
/*!******************************!*\
  !*** ./src/Asset/cloudy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a1faaf3838336a3c07c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/cloudy.jpg?");

/***/ }),

/***/ "./src/Asset/main-background.jpg":
/*!***************************************!*\
  !*** ./src/Asset/main-background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f46ad730f639d8deb152.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/main-background.jpg?");

/***/ }),

/***/ "./src/Asset/rain.jpg":
/*!****************************!*\
  !*** ./src/Asset/rain.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f0ee9fa97d3fb828fcd.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/rain.jpg?");

/***/ }),

/***/ "./src/Asset/snow.jpg":
/*!****************************!*\
  !*** ./src/Asset/snow.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed1880ffab05004e6df6.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/snow.jpg?");

/***/ }),

/***/ "./src/Asset/thunderstorm.jpg":
/*!************************************!*\
  !*** ./src/Asset/thunderstorm.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ae0064e487c64233435.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/Asset/thunderstorm.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
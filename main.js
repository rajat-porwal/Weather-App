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

/***/ "./node_modules/footer-component-by-rajat-porwal/src/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/footer-component-by-rajat-porwal/src/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFooter: () => (/* binding */ addFooter)\n/* harmony export */ });\nfunction addFooter() {\n   \n    var footer = document.createElement('footer');\n    var paragraph = document.createElement('p');\n    var text1 = document.createElement('span');\n    text1.textContent = 'Built by ';\n    \n    var profileLinkText = document.createElement('a');\n    profileLinkText.textContent = 'Rajat Porwal';\n    profileLinkText.href = 'https://github.com/rajat-porwal';\n    \n    var text2 = document.createElement('span');\n    text2.textContent = ' | ';\n    \n    var linkedinLink = document.createElement('span');\n    var sourceCodeAnchor = document.createElement('a');\n    sourceCodeAnchor.textContent = 'LinkedIn';\n    sourceCodeAnchor.href = 'https://www.linkedin.com/in/rajatporwal/';\n\n    linkedinLink.appendChild(sourceCodeAnchor);\n    paragraph.appendChild(text1);\n    paragraph.appendChild(profileLinkText);\n    paragraph.appendChild(text2);\n    paragraph.appendChild(linkedinLink);\n    footer.appendChild(paragraph);\n   \n    document.body.appendChild(footer);\n\n    var style = document.createElement('style');\n    style.textContent = `\n        footer {\n            background-color: #2c3e50; \n            color: #ffffff; \n            padding: 20px; \n            text-align: center;\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); \n            transition: background-color 0.3s ease; \n        }\n        \n        footer p {\n            margin: 0;\n        }\n        \n        footer a {\n            margin-left: 3px;\n            margin-right: 3px;\n            color: #3498db; \n            text-decoration: none;\n            transition: color 0.3s ease; \n        }\n        \n        footer a:hover {\n            color: #2980b9; \n            text-decoration: underline;\n        }\n    \n    `;\n    document.head.appendChild(style);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/footer-component-by-rajat-porwal/src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Asset_clear_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset/clear.jpg */ \"./src/Asset/clear.jpg\");\n/* harmony import */ var _Asset_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asset/cloudy.jpg */ \"./src/Asset/cloudy.jpg\");\n/* harmony import */ var _Asset_rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asset/rain.jpg */ \"./src/Asset/rain.jpg\");\n/* harmony import */ var _Asset_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Asset/thunderstorm.jpg */ \"./src/Asset/thunderstorm.jpg\");\n/* harmony import */ var _Asset_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Asset/snow.jpg */ \"./src/Asset/snow.jpg\");\n/* harmony import */ var _Asset_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset/main-background.jpg */ \"./src/Asset/main-background.jpg\");\n/* harmony import */ var _node_modules_footer_component_by_rajat_porwal_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/footer-component-by-rajat-porwal/src */ \"./node_modules/footer-component-by-rajat-porwal/src/index.js\");\n\n\n\n\n\n\n\n\nconst currentTemp = document.getElementById('currentTemp');\nconst condition = document.getElementById('condition');\nconst locationElem = document.getElementById('location');\nconst country = document.getElementById('country');\nconst icon = document.getElementById('icon');\nconst searchLocation = document.getElementById('search');\nconst btn = document.getElementById('btn');\nconst FahrenheitBtn = document.getElementById('cToFBtn');\n\ncurrentTemp.classList.add('temp');\ncondition.classList.add('condition-text');\nlocationElem.classList.add('location-text');\ncountry.classList.add('country-text');\nicon.classList.add('weather-icon');\nsearchLocation.classList.add('search-input');\nbtn.classList.add('search-button');\nFahrenheitBtn.classList.add('temp-toggle');\n\nfunction weatherFetcher(location) {\n    return new Promise((resolve, reject) => {\n        const apiKey = '57bfa963400a4f5d9fc124848241705';\n        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;\n        fetch(url, { mode: 'cors' })\n            .then(response => {\n                if (response.ok) {\n                    return response.json();\n                } else {\n                    reject('Network Error');\n                }\n            })\n            .then(response => {\n                resolve(response);\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n\nfunction celsiusToFahrenheit(celsius) {\n    return (celsius * 9 / 5) + 32;\n}\n\nfunction fahrenheitToCelsius(fahrenheit) {\n    return (fahrenheit - 32) * 5 / 9;\n}\n\nfunction displayWeather(response) {\n    currentTemp.innerText = response.current.temp_c + '°C';\n    condition.innerText = response.current.condition.text;\n    locationElem.innerText = response.location.name + ',';\n    country.innerText = response.location.country;\n    icon.src = 'https:' + response.current.condition.icon;\n\n    function setBackground(image) {     //add this function because images were not rendering correctly so create the whole function\n        document.body.style.backgroundImage = `url(${image})`;\n        document.body.style.backgroundSize = 'cover';\n        document.body.style.backgroundPosition = 'center';\n        document.body.style.backgroundRepeat = 'no-repeat';\n        document.body.style.width = '100vw';\n        document.body.style.height = '100vh';\n        document.body.style.margin = '0';\n        document.body.style.padding = '0';\n        document.body.style.overflow = 'hidden';\n    }\n\n    switch (condition.innerText) {\n        case 'Clear':\n        case 'Sunny':\n            setBackground(_Asset_clear_jpg__WEBPACK_IMPORTED_MODULE_0__);\n            break;\n        case 'Partly cloudy':\n        case 'Cloudy':\n        case 'Overcast':\n            setBackground(_Asset_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__);\n            break;\n        case 'Mist':\n        case 'Patchy rain possible':\n        case 'Patchy sleet possible':\n        case 'Patchy freezing drizzle possible':\n        case 'Fog':\n        case 'Freezing fog':\n        case 'Patchy light drizzle':\n        case 'Light drizzle':\n        case 'Freezing drizzle':\n        case 'Heavy freezing drizzle':\n        case 'Patchy light rain':\n        case 'Light rain':\n        case 'Moderate rain at times':\n        case 'Moderate rain':\n        case 'Heavy rain at times':\n        case 'Heavy rain':\n        case 'Light freezing rain':\n        case 'Moderate or heavy freezing rain':\n        case 'Light rain shower':\n        case 'Moderate or heavy rain shower':\n        case 'Torrential rain shower':\n        case 'Patchy light rain with thunder':\n        case 'Moderate or heavy rain with thunder':\n            setBackground(_Asset_rain_jpg__WEBPACK_IMPORTED_MODULE_2__);\n            break;\n        case 'Thundery outbreaks possible':\n        case 'Patchy light snow with thunder':\n        case 'Moderate or heavy snow with thunder':\n            setBackground(_Asset_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__);\n            break;\n        case 'Blowing snow':\n        case 'Blizzard':\n        case 'Light sleet':\n        case 'Moderate or heavy sleet':\n        case 'Light sleet showers':\n        case 'Moderate or heavy sleet showers':\n        case 'Light snow':\n        case 'Patchy light snow':\n        case 'Patchy moderate snow':\n        case 'Moderate snow':\n        case 'Patchy heavy snow':\n        case 'Heavy snow':\n        case 'Light snow showers':\n        case 'Moderate or heavy snow showers':\n        case 'Light showers of ice pellets':\n        case 'Moderate or heavy showers of ice pellets':\n        case 'Ice pellets':\n            setBackground(_Asset_snow_jpg__WEBPACK_IMPORTED_MODULE_4__);\n            break;\n        default:\n            setBackground(_Asset_main_background_jpg__WEBPACK_IMPORTED_MODULE_5__);\n            break;\n    }\n}\n\nfunction weatherDisplay() {\n    weatherFetcher('Rohtak')\n        .then(response => {\n            displayWeather(response);\n        })\n        .catch(error => {\n            alert(error);\n        });\n\n    btn.addEventListener('click', () => {\n        const searchLocationValue = searchLocation.value;\n        weatherFetcher(searchLocationValue)\n            .then(response => {\n                displayWeather(response);\n            })\n            .catch(error => {\n                alert(error.message);\n            });\n    });\n\n    FahrenheitBtn.addEventListener('click', () => {\n        const tempText = currentTemp.innerText;\n        const tempValue = parseFloat(tempText);\n\n        if (FahrenheitBtn.classList.contains('celsius')) {\n            currentTemp.innerText = celsiusToFahrenheit(tempValue).toFixed(1) + '°F';\n            FahrenheitBtn.classList.remove('celsius');\n            FahrenheitBtn.classList.add('fahrenheit');\n            FahrenheitBtn.innerText = 'Convert to Celsius';\n        } else {\n            currentTemp.innerText = fahrenheitToCelsius(tempValue).toFixed(1) + '°C';\n            FahrenheitBtn.classList.remove('fahrenheit');\n            FahrenheitBtn.classList.add('celsius');\n            FahrenheitBtn.innerText = 'Convert to Fahrenheit';\n        }\n    });\n}\n\nweatherDisplay();\n(0,_node_modules_footer_component_by_rajat_porwal_src__WEBPACK_IMPORTED_MODULE_6__.addFooter)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
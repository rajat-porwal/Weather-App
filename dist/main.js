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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const currentTemp = document.getElementById('currentTemp');\nconst condition = document.getElementById('condition');\nconst locationElem = document.getElementById('location'); \nconst country = document.getElementById('country');\nconst icon = document.getElementById('icon');\nconst searchLocation = document.getElementById('search');\nconst btn = document.getElementById('btn');\nconst FahrenheitBtn = document.getElementById('cToFBtn');\n\nfunction weatherFetcher(location) {\n    return new Promise((resolve, reject) => {\n        const apiKey = '57bfa963400a4f5d9fc124848241705';\n        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;\n        fetch(url, { mode: 'cors' })\n            .then(response => {\n                if (response.ok) {\n                    return response.json();\n                } else {\n                    reject('Network Error');\n                }\n            })\n            .then(response => {\n                resolve(response);\n            })\n            .catch(error => {\n                reject(error);\n            });\n    });\n}\n\nfunction celsiusToFahrenheit(celsius) {\n    return (celsius * 9 / 5) + 32;\n}\n\nfunction fahrenheitToCelsius(fahrenheit) {\n    return (fahrenheit - 32) * 5 / 9;\n}\n\nfunction displayWeather(response) {\n    currentTemp.innerText = response.current.temp_c + '°C';\n    condition.innerText = response.current.condition.text;\n    locationElem.innerText = response.location.name + ','; \n    country.innerText = response.location.country;\n    icon.src = 'https:' + response.current.condition.icon;\n}\n\nfunction weatherDisplay() {\n    weatherFetcher('Rohtak')\n        .then(response => {\n            displayWeather(response);\n        })\n        .catch(error => {\n            alert(error);\n        });\n\n    btn.addEventListener('click', () => {\n        const searchLocationValue = searchLocation.value; \n        weatherFetcher(searchLocationValue)\n            .then(response => {\n                displayWeather(response);\n            })\n            .catch(error => {\n                alert(error.message);\n            });\n    });\n\n    FahrenheitBtn.addEventListener('click', () => {\n        if (FahrenheitBtn.classList.contains('celsius')) {\n            const tempCelsius = parseFloat(currentTemp.innerText);\n            currentTemp.innerText = celsiusToFahrenheit(tempCelsius) + '°F';\n            FahrenheitBtn.classList.remove('celsius');\n            FahrenheitBtn.classList.add('fahrenheit');\n            FahrenheitBtn.innerText = 'Convert to Celsius';\n        } else {\n            const tempFahrenheit = parseFloat(currentTemp.innerText);\n            currentTemp.innerText = fahrenheitToCelsius(tempFahrenheit) + '°C';\n            FahrenheitBtn.classList.remove('fahrenheit');\n            FahrenheitBtn.classList.add('celsius');\n            FahrenheitBtn.innerText = 'Convert to Fahrenheit';\n        }\n    });\n}\n\nweatherDisplay();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
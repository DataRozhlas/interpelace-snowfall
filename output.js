/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\nvar colors = ['#b80058', '#ebac23', '#008cf9', '#006e00', '#00bbad', '#d163e6', '#b24502', '#ff9287', '#5954d6', '#00c6f8', '#878500', '#00a76c', '#bdbdbd'];\nvar vysledek = ['Přítomen', 'Nepřítomen', 'Propadla', 'Zrušena', 'Dosud neproběhla'];\nvar celkem = [{\n  y: 38,\n  abs: 638\n}, {\n  y: 24.9,\n  abs: 418\n}, {\n  y: 12.3,\n  abs: 206\n}, {\n  y: 16.5,\n  abs: 277\n}, {\n  y: 8.3,\n  abs: 139\n}];\nvar premier = [{\n  y: 38.4,\n  abs: 158\n}, {\n  y: 24.5,\n  abs: 101\n}, {\n  y: 8.1,\n  abs: 33\n}, {\n  y: 20.9,\n  abs: 86\n}, {\n  y: 8.3,\n  abs: 34\n}];\nvar kdo = [174, 101, 71, 71, 54, 53, 53, 47, 39, 37, 36];\nvar koho = [412, 125, 120, 113, 104, 103, 102, 79, 70, 53, 52];\nvar pred = [16.7, 22.1, 19.2, 27.5, 38.3, 50.9, 54.4, 38.0, 44.2, 61.6, 24.3];\nvar abs = [47.1, 44.2, 36.5, 33.3, 24.5, 20.8, 15.5, 13.9, 12.4, 9.6, 5.7];\nvar prop = [14.7, 12.5, 19.2, 15.0, 8.0, 20.8, 11.7, 16.5, 11.5, 7.2, 10.0];\nvar zrus = [14.7, 12.5, 17.3, 14.2, 20.9, 7.5, 10.7, 31.6, 16.8, 20.8, 4.3];\nvar nezn = [6.9, 8.7, 7.7, 10.0, 8.3, 0.0, 7.8, 0.0, 15.0, 0.8, 55.7];\nvar absenteri;\n\nif (screen.width < 420) {\n  absenteri = ['Plaga, MŠMT', 'Hamáček, MZV', 'Toman, MZe.', 'Maláčová, MPSV', 'Babiš, premiér', 'Kremlík, MD', 'Brabec, MŽP', 'Ťok, MD', 'Schillerová, MF', 'Vojtěch, MZ', 'Havlíček, MP'];\n} else if (screen.width < 600) {\n  absenteri = ['Plaga, MŠMT (ANO)', 'Hamáček, MZV (ČSSD)', 'Toman, MZe. (ČSSD)', 'Maláčová, MPSV (ČSSD)', 'Babiš, premiér (ANO)', 'Kremlík, MD (ANO)', 'Brabec, MŽP (ANO)', 'Ťok, MD (ANO)', 'Schillerová, MF (ANO)', 'Vojtěch, MZ (ANO)', 'Havlíček, MP (ANO)'];\n} else {\n  absenteri = ['Robert Plaga, MŠMT (ANO)', 'Jan Hamáček, MZV (ČSSD)', 'Miroslav Toman, MZe. (ČSSD)', 'Jana Maláčová, MPSV (ČSSD)', 'Andrej Babiš, premiér (ANO)', 'Vladimír Kremlík, MD (ANO)', 'Richard Brabec, MŽP (ANO)', 'Dan Ťok, MD (ANO)', 'Alena Schillerová, MF (ANO)', 'Adam Vojtěch, MZ (ANO)', 'Karel Havlíček, MP (ANO)'];\n}\n\nvar poslanci;\n\nif (screen.width < 420) {\n  poslanci = ['Kovářová (STAN)', 'Feri (TOP)', 'Michálek (Pir.)', 'Richterová (Pir.)', 'Munzar (ODS)', 'Maříková (SPD)', 'Jurečka (KDU)', 'Golasowská (KDU)', 'Kaňkovský (KDU)', 'Adamová (TOP)', 'Lanšádlová (TOP)'];\n} else {\n  poslanci = ['Kovářová (STAN)', 'Feri (TOP 09)', 'Michálek (Piráti)', 'Richterová (Piráti)', 'Munzar (ODS)', 'Maříková (SPD)', 'Jurečka (KDU-ČSL)', 'Golasowská (KDU-ČSL)', 'Kaňkovský (KDU-ČSL)', 'Adamová (TOP 09)', 'Lanšádlová (TOP 09)'];\n} // ['Věra Kovářová (STAN)', 'Dominik Feri (TOP 09)', 'Jakub Michálek (Piráti)', 'Olga Richterová (Piráti)', 'Vojtěch Munzar (ODS)', 'Karla Maříková (SPD)', 'Marian Jurečka (KDU-ČSL)', 'Pavla Golasowská (KDU-ČSL)', 'Vít Kaňkovský (KDU-ČSL)', 'Markéta P. Adamová (TOP 09)', 'Helena Lanšádlová (TOP 09)'];\n\n\nvar ministri;\n\nif (screen.width < 420) {\n  ministri = ['Babiš, premiér', 'Vojtěch, MZdr.', 'Maláčová, MPSV', 'Schillerová, MF', 'Hamáček, MZV', 'Brabec, MŽP', 'Plaga, MŠMT', 'Ťok, MD', 'Havlíček, MP', 'Kremlík, MD', 'Toman, MZe.'];\n} else {\n  ministri = ['Babiš, premiér (ANO)', 'Vojtěch, MZdr. (ANO)', 'Maláčová, MPSV (ČSSD)', 'Schillerová, MF (ANO)', 'Hamáček, MZV (ČSSD)', 'Brabec, MŽP (ANO)', 'Plaga, MŠMT (ANO)', 'Ťok, MD (ANO)', 'Havlíček, MP (ANO)', 'Kremlík, MD (ANO)', 'Toman, MZe. (ČSSD)'];\n} // ['Andrej Babiš, premiér (ANO)', 'Adam Vojtěch, MZdr. (ANO)', 'Jana Maláčová, MPSV (ČSSD)', 'Alena Schillerová, MF (ANO)', 'Jan Hamáček, MZV (ČSSD)', 'Richard Brabec, MŽP (ANO)', 'Robert Plaga, MŠMT (ANO)', 'Dan Ťok, MD (ANO)', 'Karel Havlíček, MP (ANO)', 'Vladimír Kremlík, MD (ANO)', 'Miroslav Toman, MZe. (ČSSD)'];\n\n\nvar kdoskym = [[1, 1, 0], [2, 2, 0], [3, 3, 0], [4, 4, 0], [5, 5, 0], [6, 6, 0], [7, 7, 0], [8, 8, 0], [9, 9, 0], [10, 1, 38], [10, 2, 26], [11, 1, 24], [12, 3, 22], [13, 1, 22], [14, 1, 21], [15, 4, 21], [12, 1, 19], [16, 5, 18], [17, 3, 17], [18, 6, 16], [10, 4, 16], [19, 7, 15], [18, 1, 14], [20, 1, 14], [21, 1, 13], [12, 4, 13], [22, 1, 12], [23, 1, 12], [10, 8, 12], [24, 1, 11], [11, 6, 11], [25, 2, 11], [26, 1, 10], [27, 1, 10], [28, 1, 10], [22, 9, 10], [29, 4, 10]];\nvar uzle = [{\n  \"id\": 1,\n  \"short\": \"Babiš\",\n  \"name\": \"Andrej Babiš\"\n}, {\n  \"id\": 2,\n  \"short\": \"Schillerová\",\n  \"name\": \"Alena Schillerová\"\n}, {\n  \"id\": 3,\n  \"short\": \"Maláčová\",\n  \"name\": \"Jana Maláčová\"\n}, {\n  \"id\": 4,\n  \"short\": \"Vojtěch\",\n  \"name\": \"Adam Vojtěch\"\n}, {\n  \"id\": 5,\n  \"short\": \"Brabec\",\n  \"name\": \"Richard Brabec\"\n}, {\n  \"id\": 6,\n  \"short\": \"Ťok\",\n  \"name\": \"Dan Ťok\"\n}, {\n  \"id\": 7,\n  \"short\": \"Plaga\",\n  \"name\": \"Robert Plaga\"\n}, {\n  \"id\": 8,\n  \"short\": \"Hamáček\",\n  \"name\": \"Jan Hamáček\"\n}, {\n  \"id\": 9,\n  \"short\": \"Havlíček\",\n  \"name\": \"Karel Havlíček\"\n}, {\n  \"id\": 10,\n  \"short\": \"Kovářová\",\n  \"name\": \"Věra Kovářová\"\n}, {\n  \"id\": 11,\n  \"short\": \"Feri\",\n  \"name\": \"Dominik Feri\"\n}, {\n  \"id\": 12,\n  \"short\": \"Richterová\",\n  \"name\": \"Olga Richterová\"\n}, {\n  \"id\": 13,\n  \"short\": \"Langšádlová\",\n  \"name\": \"Helena Langšádlová\"\n}, {\n  \"id\": 14,\n  \"short\": \"Michálek\",\n  \"name\": \"Jakub Michálek\"\n}, {\n  \"id\": 15,\n  \"short\": \"Kaňkovský\",\n  \"name\": \"Vít Kaňkovský\"\n}, {\n  \"id\": 16,\n  \"short\": \"Balcarová\",\n  \"name\": \"Dana Balcarová\"\n}, {\n  \"id\": 17,\n  \"short\": \"Golasowská\",\n  \"name\": \"Pavla Golasowská\"\n}, {\n  \"id\": 18,\n  \"short\": \"Jurečka\",\n  \"name\": \"Marian Jurečka\"\n}, {\n  \"id\": 19,\n  \"short\": \"Bartoň\",\n  \"name\": \"Lukáš Bartoň\"\n}, {\n  \"id\": 20,\n  \"short\": \"Adamová\",\n  \"name\": \"Markéta Pekarová Adamová\"\n}, {\n  \"id\": 21,\n  \"short\": \"Valenta\",\n  \"name\": \"Jiří Valenta\"\n}, {\n  \"id\": 22,\n  \"short\": \"Munzar\",\n  \"name\": \"Vojtěch Munzar\"\n}, {\n  \"id\": 23,\n  \"short\": \"Fiala\",\n  \"name\": \"Petr Fiala\"\n}, {\n  \"id\": 24,\n  \"short\": \"Kupka\",\n  \"name\": \"Martin Kupka\"\n}, {\n  \"id\": 25,\n  \"short\": \"Ferjenčík\",\n  \"name\": \"Mikuláš Ferjenčík\"\n}, {\n  \"id\": 26,\n  \"short\": \"Bartoš\",\n  \"name\": \"Ivan Bartoš\"\n}, {\n  \"id\": 27,\n  \"short\": \"Blaha\",\n  \"name\": \"Stanislav Blaha\"\n}, {\n  \"id\": 28,\n  \"short\": \"Maříková\",\n  \"name\": \"Karla Maříková\"\n}, {\n  \"id\": 29,\n  \"short\": \"Třešňák\",\n  \"name\": \"Petr Třešňák\"\n}];\nvar share = [190, 30, 40, 48, 16, 26, 16, 14, 14, 80, 30, 44, 22, 21, 21, 18, 17, 28, 15, 16, 15, 20, 14, 12, 12, 12, 12, 12, 14]; // [230, 37, 39, 60, 18, 27, 15, 12, 10, 92, 35, 54, 22, 21, 21, 18, 17, 30, 15, 14, 13, 22, 12, 11, 11, 10, 10, 10, 10];\n\nHighcharts.chart('celkem', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Ústní interpelace na vládu A. Babiše'\n  },\n  subtitle: {\n    text: 'celkem × premiér'\n  },\n  xAxis: {\n    categories: vysledek\n  },\n  yAxis: {\n    title: {\n      text: 'podíl na interpelacích'\n    },\n    labels: {\n      formatter: function formatter() {\n        return this.value + ' %';\n      }\n    }\n  },\n  tooltip: {\n    formatter: function formatter() {\n      return '<span style=\"font-size: 10px\">' + this.x + '</span><br/>' + '<b>' + this.y + ' % / ' + this.point.abs + ' </b> interpelací';\n    }\n  },\n  exporting: {\n    enabled: false\n  },\n  credits: {\n    href: 'https://www.psp.cz/sqw/interp.sqw?o=8',\n    text: 'Zdroj: PS PČR'\n  },\n  series: [{\n    name: 'vláda',\n    data: celkem,\n    color: colors[7]\n  }, {\n    name: 'premiér',\n    data: premier,\n    color: colors[4]\n  }]\n});\nHighcharts.chart('kdo', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Kdo se ptá?'\n  },\n  xAxis: {\n    categories: poslanci\n  },\n  yAxis: {\n    title: {\n      text: ''\n    }\n  },\n  tooltip: {\n    formatter: function formatter() {\n      return '<span style=\"font-size: 10px\">' + this.x + '</span><br/>' + '<b>' + this.y + ' </b> interpelací';\n    }\n  },\n  exporting: {\n    enabled: false\n  },\n  legend: {\n    enabled: false\n  },\n  credits: {\n    enabled: false\n  },\n  series: [{\n    name: 'kdo',\n    data: kdo,\n    color: colors[7]\n  }]\n});\nHighcharts.chart('koho', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Kdo odpovídá?'\n  },\n  xAxis: {\n    categories: ministri\n  },\n  yAxis: {\n    title: {\n      text: ''\n    }\n  },\n  tooltip: {\n    formatter: function formatter() {\n      return '<span style=\"font-size: 10px\">' + this.x + '</span><br/>' + '<b>' + this.y + ' </b> odpovědí';\n    }\n  },\n  exporting: {\n    enabled: false\n  },\n  legend: {\n    enabled: false\n  },\n  credits: {\n    enabled: false\n  },\n  series: [{\n    name: 'koho',\n    data: koho,\n    color: colors[4]\n  }]\n});\nHighcharts.chart('absence', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Účast na interpelacích'\n  },\n  subtitle: {\n    useHTML: true,\n    text: '<p>ministři s nejméně 50 dotazy</p><p>období od 1/2019 do 2/2020</p>'\n  },\n  xAxis: {\n    categories: absenteri\n  },\n  yAxis: {\n    title: {\n      text: 'podíl interpelací'\n    },\n    labels: {\n      formatter: function formatter() {\n        return this.value + ' %';\n      }\n    }\n  },\n  tooltip: {\n    valueSuffix: ' %',\n    shared: true\n  },\n  exporting: {\n    enabled: false\n  },\n  credits: {\n    href: 'https://www.psp.cz/sqw/interp.sqw?o=8',\n    text: 'Zdroj: PS PČR'\n  },\n  series: [{\n    name: vysledek[0],\n    data: pred,\n    color: colors[3],\n    visible: false\n  }, {\n    name: vysledek[1],\n    data: abs,\n    color: colors[0]\n  }, {\n    name: vysledek[2],\n    data: prop,\n    color: colors[1],\n    visible: false\n  }, {\n    name: vysledek[3],\n    data: zrus,\n    color: colors[4],\n    visible: false\n  }, {\n    name: vysledek[4],\n    data: nezn,\n    color: colors[7],\n    visible: false\n  }]\n});\nHighcharts.setOptions({\n  colors: ['#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#e6194b', '#3cb44b']\n});\nHighcharts.chart('kdoskym', {\n  title: {\n    text: 'Duely'\n  },\n  subtitle: {\n    useHTML: true,\n    text: '<p>poslanci s nejméně 10 interpelacemi na jednoho ministra</p><p>poslanci barevně, ministři odstíny šedi</p>'\n  },\n  accessibility: {\n    point: {\n      valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'\n    }\n  },\n  tooltip: {\n    nodeFormat: '{point.name}<br/>'\n  },\n  exporting: {\n    enabled: false\n  },\n  credits: {\n    href: 'https://www.psp.cz/sqw/interp.sqw?o=8',\n    text: 'Zdroj: PS PČR'\n  },\n  series: [{\n    size: '70%',\n    keys: ['from', 'to', 'weight'],\n    data: kdoskym,\n    nodes: uzle,\n    type: 'dependencywheel',\n    name: 'Duely',\n    dataLabels: {\n      enabled: false\n    }\n  }, {\n    type: 'pie',\n    size: '70%',\n    tooltip: {\n      headerFormat: '<span style=\"font-size: 10px\">Duely</span><br/>',\n      pointFormat: '{point.name}<br/>'\n    },\n    data: [{\n      y: share[0],\n      name: uzle[0][\"short\"]\n    }, {\n      y: share[1],\n      name: uzle[1][\"short\"]\n    }, {\n      y: share[2],\n      name: uzle[2][\"short\"]\n    }, {\n      y: share[3],\n      name: uzle[3][\"short\"]\n    }, {\n      y: share[4],\n      name: uzle[4][\"short\"]\n    }, {\n      y: share[5],\n      name: uzle[5][\"short\"]\n    }, {\n      y: share[6],\n      name: uzle[6][\"short\"]\n    }, {\n      y: share[7],\n      name: uzle[7][\"short\"]\n    }, {\n      y: share[8],\n      name: uzle[8][\"short\"]\n    }, {\n      y: share[9],\n      name: uzle[9][\"short\"]\n    }, {\n      y: share[10],\n      name: uzle[10][\"short\"]\n    }, {\n      y: share[11],\n      name: uzle[11][\"short\"]\n    }, {\n      y: share[12],\n      name: uzle[12][\"short\"]\n    }, {\n      y: share[13],\n      name: uzle[13][\"short\"]\n    }, {\n      y: share[14],\n      name: uzle[14][\"short\"]\n    }, {\n      y: share[15],\n      name: uzle[15][\"short\"]\n    }, {\n      y: share[16],\n      name: uzle[16][\"short\"]\n    }, {\n      y: share[17],\n      name: uzle[17][\"short\"]\n    }, {\n      y: share[18],\n      name: uzle[18][\"short\"]\n    }, {\n      y: share[19],\n      name: uzle[19][\"short\"]\n    }, {\n      y: share[20],\n      name: uzle[20][\"short\"]\n    }, {\n      y: share[21],\n      name: uzle[21][\"short\"]\n    }, {\n      y: share[22],\n      name: uzle[22][\"short\"]\n    }, {\n      y: share[23],\n      name: uzle[23][\"short\"]\n    }, {\n      y: share[24],\n      name: uzle[24][\"short\"]\n    }, {\n      y: share[25],\n      name: uzle[25][\"short\"]\n    }, {\n      y: share[26],\n      name: uzle[26][\"short\"]\n    }, {\n      y: share[27],\n      name: uzle[27][\"short\"]\n    }, {\n      y: share[28],\n      name: uzle[28][\"short\"]\n    }],\n    colors: ['none'],\n    borderWidth: 0,\n    dataLabels: {\n      connectorWidth: 0.5,\n      alignTo: 'plotEdges',\n      format: '{point.name}',\n      connectorColor: '#333'\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });
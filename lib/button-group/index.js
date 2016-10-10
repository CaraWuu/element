module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);


/***/ },

/***/ 25:
/***/ function(module, exports) {

	var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

	module.exports = function mergeJSXProps (objs) {
	  return objs.reduce(function (a, b) {
	    var aa, bb, key, nestedKey
	    for (key in b) {
	      aa = a[key]
	      bb = b[key]
	      if (aa && nestRE.test(key)) {
	        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
	          // merge functions
	          for (nestedKey in bb) {
	            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
	          }
	        } else if (Array.isArray(aa)) {
	          a[key] = aa.concat(bb)
	        } else if (Array.isArray(bb)) {
	          a[key] = [aa].concat(bb)
	        } else {
	          for (nestedKey in bb) {
	            aa[nestedKey] = bb[nestedKey]
	          }
	        }
	      } else {
	        a[key] = b[key]
	      }
	    }
	    return a
	  }, {})
	}

	function mergeFn (a, b) {
	  return function () {
	    a.apply(this, arguments)
	    b.apply(this, arguments)
	  }
	}


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _babelHelperVueJsxMergeProps = __webpack_require__(25);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElButtonGroup',

	  functional: true,

	  render: function render(h, _ref) {
	    var slots = _ref.slots;
	    var data = _ref.data;

	    return h(
	      "div",
	      (0, _babelHelperVueJsxMergeProps2.default)([{
	        "class": "el-button-group"
	      }, data, { on: data.nativeOn }]),
	      [slots().default]
	    );
	  }
	};

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElButtonGroup = __webpack_require__(26);

	ElButtonGroup.install = function (Vue) {
	  Vue.component(ElButtonGroup.name, ElButtonGroup);
	};

	module.exports = ElButtonGroup;

/***/ }

/******/ });
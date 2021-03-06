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

	module.exports = __webpack_require__(89);


/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popper");

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElDropdownMenu = __webpack_require__(90);

	ElDropdownMenu.install = function (Vue) {
	  Vue.component(ElDropdownMenu.name, ElDropdownMenu);
	};

	module.exports = ElDropdownMenu;

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(91)

	/* template */
	var __vue_template__ = __webpack_require__(92)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popper = __webpack_require__(53);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElDropdownMenu',

	  props: {
	    visible: Boolean
	  },
	  data: function data() {
	    return {
	      popper: null
	    };
	  },

	  computed: {
	    menuAlign: function menuAlign() {
	      return this.$parent.menuAlign;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    document.body.appendChild(this.$el);

	    this.$nextTick(function () {
	      _this.popper = new _popper2.default(_this.$parent.$el, _this.$el, { gpuAcceleration: false, placement: 'bottom-' + _this.menuAlign });
	    });
	  },
	  destroyed: function destroyed() {
	    var _this2 = this;

	    setTimeout(function () {
	      _this2.popper.destroy();
	    }, 300);
	  }
	};

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "el-dropdown__menu"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });
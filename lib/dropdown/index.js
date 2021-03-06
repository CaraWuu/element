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

	module.exports = __webpack_require__(82);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElDropdown = __webpack_require__(83);

	ElDropdown.install = function (Vue) {
	  Vue.component(ElDropdown.name, ElDropdown);
	};

	module.exports = ElDropdown;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(84)
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

	module.exports = __vue_exports__


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _clickoutside = __webpack_require__(9);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElDropdown',

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    menuAlign: {
	      type: String,
	      default: 'end'
	    },
	    type: {
	      type: String
	    },
	    splitButton: Boolean
	  },

	  data: function data() {
	    return {
	      timeout: null,
	      visible: false
	    };
	  },
	  mounted: function mounted() {
	    this.initEvent();
	  },


	  methods: {
	    show: function show() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.visible = true;
	      }, 250);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.visible = false;
	      }, 150);
	    },
	    handleClick: function handleClick() {
	      this.visible = !this.visible;
	    },
	    initEvent: function initEvent() {
	      var _this3 = this;

	      var trigger = this.trigger;
	      var show = this.show;
	      var hide = this.hide;
	      var handleClick = this.handleClick;
	      var splitButton = this.splitButton;

	      var triggerElm = splitButton ? this.$refs.trigger : this.$slots.default[0].elm;

	      if (trigger === 'hover') {
	        (function () {
	          triggerElm.addEventListener('mouseenter', show);
	          triggerElm.addEventListener('mouseleave', hide);

	          var dropdown = _this3.$slots.dropdown[0];
	          var insertHook = dropdown.data.hook.insert;
	          dropdown.data.hook.insert = function (vnode) {
	            insertHook(vnode);
	            _this3.$nextTick(function (_) {
	              vnode.elm.addEventListener('mouseenter', show);
	              vnode.elm.addEventListener('mouseleave', hide);
	            });
	          };
	        })();
	      } else if (trigger === 'click') {
	        triggerElm.addEventListener('click', handleClick);
	      }
	    }
	  },

	  render: function render(h) {
	    var _this4 = this;

	    var hide = this.hide;
	    var splitButton = this.splitButton;
	    var visible = this.visible;
	    var type = this.type;

	    var dropdownElm = visible ? this.$slots.dropdown : null;

	    var handleClick = function handleClick(_) {
	      _this4.$emit('click');
	    };

	    var triggerElm = !splitButton ? this.$slots.default : h(
	      'el-button-group',
	      null,
	      [h(
	        'el-button',
	        {
	          attrs: { type: type },
	          nativeOn: {
	            click: handleClick
	          }
	        },
	        [this.$slots.default]
	      ), h(
	        'el-button',
	        { ref: 'trigger', attrs: { type: type },
	          'class': 'el-dropdown__icon-button' },
	        [h(
	          'i',
	          { 'class': 'el-dropdown__icon el-icon-caret-bottom' },
	          []
	        )]
	      )]
	    );

	    return h(
	      'div',
	      { 'class': 'el-dropdown', directives: [{
	          name: 'clickoutside',
	          value: hide
	        }]
	      },
	      [triggerElm, h(
	        'transition',
	        {
	          attrs: { name: 'md-fade-bottom' }
	        },
	        [dropdownElm]
	      )]
	    );
	  }
	};

/***/ }

/******/ });
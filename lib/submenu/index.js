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

	module.exports = __webpack_require__(250);


/***/ },

/***/ 148:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options._componentTag !== 'el-menu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent.$options._componentTag !== 'el-menu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    }
	  }
	};

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElSubmenu = __webpack_require__(251);

	ElSubmenu.install = function (Vue) {
	  Vue.component(ElSubmenu.name, ElSubmenu);
	};

	module.exports = ElSubmenu;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(252)

	/* template */
	var __vue_template__ = __webpack_require__(253)
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

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menuMixin = __webpack_require__(148);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'el-submenu',

	  componentName: 'submenu',

	  mixins: [_menuMixin2.default],

	  props: {
	    index: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      timeout: null,
	      active: false
	    };
	  },

	  computed: {
	    opened: function opened() {
	      return this.rootMenu.openedMenus.indexOf(this.index) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.rootMenu.handleSubmenuClick(this.index, this.indexPath);
	    },
	    handleMouseenter: function handleMouseenter() {
	      var _this = this;

	      if (this.rootMenu.mode === 'horizontal') {
	        clearTimeout(this.timeout);
	        this.timeout = setTimeout(function () {
	          _this.rootMenu.openMenu(_this.index, _this.indexPath);
	        }, 300);
	      }
	    },
	    handleMouseleave: function handleMouseleave() {
	      var _this2 = this;

	      if (this.rootMenu.mode === 'horizontal') {
	        clearTimeout(this.timeout);
	        this.timeout = setTimeout(function () {
	          _this2.rootMenu.closeMenu(_this2.index, _this2.indexPath);
	        }, 300);
	      }
	    }
	  },
	  created: function created() {
	    this.rootMenu.submenus[this.index] = this;
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$on('item-select', function (index, indexPath) {
	      _this3.active = indexPath.indexOf(_this3.index) !== -1;
	    });
	  }
	};

/***/ },

/***/ 253:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    class: {
	      'el-submenu': true, 'is-active': active, 'is-opened': opened
	    },
	    on: {
	      "mouseenter": handleMouseenter,
	      "mouseleave": handleMouseleave
	    }
	  }, [_h('div', {
	    staticClass: "el-submenu__title",
	    on: {
	      "click": handleClick
	    }
	  }, [_t("title"), " ", _h('i', {
	    class: {
	      'el-submenu__icon-arrow': true,
	      'el-icon-arrow-down': rootMenu.mode === 'vertical',
	        'el-icon-caret-bottom': rootMenu.mode === 'horizontal'
	    }
	  })]), " ", _h('transition', {
	    attrs: {
	      "name": rootMenu.mode === 'horizontal' ? 'md-fade-bottom' : ''
	    }
	  }, [_h('ul', {
	    directives: [{
	      name: "show",
	      value: (opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_t("default")])])])
	}},staticRenderFns: []}

/***/ }

/******/ });
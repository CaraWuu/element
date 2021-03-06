'use strict';

exports.__esModule = true;

var clickoutsideContext = '@@clickoutsideContext';

exports.default = {
  bind: function bind(el, binding, vnode) {
    var documentHandler = function documentHandler(e) {
      if (!vnode.context || el.contains(e.target)) return;
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName]();
      } else {
        el[clickoutsideContext].bindingFn();
      }
    };
    el[clickoutsideContext] = {
      documentHandler: documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    document.addEventListener('click', documentHandler);
  },
  update: function update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
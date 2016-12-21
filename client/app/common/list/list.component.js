import controller from './list.controller';
import template from './list.html';
export default {
  bindings: {
    criteria: '<',
    currentPage: '=?'
  },
  controller,
  template
};
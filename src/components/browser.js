// entry point rollup for browser
import * as components from './index';

if (typeof window !== 'undefined' && window.Vue) {
  for (const name in components) {
    window.Vue.component(name, components[name]);
  }
}

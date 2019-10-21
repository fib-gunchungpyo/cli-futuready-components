import { configure } from '@storybook/vue';
import '../src/scss/fib.scss';

configure(require.context('../src', true, /\.stories\.js$/), module);

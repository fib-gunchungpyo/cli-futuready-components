import FibButton from './FibButton.vue';

export default { title: 'Button' };

export const defaultButton = () => ({
  components: { FibButton },
  template: '<fib-button>Click me!</fib-button>'
});

export const loadingButton = () => ({
  components: { FibButton },
  template: '<fib-button loading>Click me!</fib-button>'
});

export const disabledButton = () => ({
  components: { FibButton },
  template: '<fib-button disabled>Click me!</fib-button>'
});

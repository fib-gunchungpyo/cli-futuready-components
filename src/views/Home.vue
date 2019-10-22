<template>
  <div>
    <h1>Tada</h1>
    <fib-button loading>Ini button</fib-button>
    <fib-button disabled>Ini button</fib-button>
    <fib-button type="is-success">Ini button</fib-button>
    <fib-button type="is-primary">Ini button</fib-button>
    <fib-button type="is-warning">Ini button</fib-button>
    <fib-button type="is-info">Ini button</fib-button>
    <fib-button type="is-link">Ini button</fib-button>
    <fib-button type="is-light">Ini button</fib-button>
    <fib-button type="is-dark">Ini button</fib-button>
    <fib-button type="is-text">Ini button</fib-button>
  </div>
</template>

<script>
// @ is an alias to /src
import FibButton from '@/components/button/FibButton.vue';

export default {
  name: 'home',
  components: {
    FibButton
  }
};
</script>

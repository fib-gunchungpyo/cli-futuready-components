<template>
  <div>
    <h1>Tada</h1>
    <fib-button>Ini button</fib-button>
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

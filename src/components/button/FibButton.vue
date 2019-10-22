<template>
  <b-button
    :type="type"
    :size="size"
    :loading="loading"
    :rounded="rounded"
    :outlined="outlined"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </b-button>
</template>

<script>
import Button from 'buefy/src/components/button/Button';

export default {
  name: 'FibButton',
  components: {
    [Button.name]: Button
  },
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: Boolean
    },
    rounded: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  }
};
</script>

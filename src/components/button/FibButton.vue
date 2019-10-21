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

<style lang="scss" scoped>
.button {
  &.is-primary:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-success:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-danger:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-link:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-warning:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-info:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
  &.is-dart:not(.is-outlined):not(.is-inverted) {
    span {
      color: #fff;
    }
  }
}
</style>

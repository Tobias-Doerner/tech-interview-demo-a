<template>
  <button
    :disabled="disabled"
    :class="classObject"
    class="base flex items-center"
    @click="$emit('click', $event)"
  >
    <slot></slot>
    <div class="spinner" v-if="loading" />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      if (this.primary) return { primary: true }
      if (this.secondary) return { secondary: true }
      return { primary: true }
    }
  }
}
</script>

<style scoped>
.base {
  @apply font-bold px-2 py-1 rounded-sm text-white disabled:opacity-50;
}

.primary {
  @apply bg-blue-500 active:bg-blue-800 hover:bg-blue-700;
}

.secondary {
  @apply bg-gray-500 active:bg-gray-800 hover:bg-gray-700;
}

.spinner {
  @apply mx-1 animate-spin rounded-full h-5 w-5 border-b-4 border-white;
}
</style>

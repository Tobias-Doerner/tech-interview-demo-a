<template>
  <div>
    <label v-if="label" class="textfield__label">
      {{ label }}
    </label>
    <input
      :placeholder="placeholder"
      v-model="input"
      class="textfield__input"
      type="text"
      @input="$emit('input', input)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    value: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      input: '' + this.value
    }
  }
}
</script>

<style scoped>
.textfield__label {
  @apply block text-gray-700 text-sm font-bold px-2;
}

.textfield__input {
  @apply appearance-none border px-2 py-1 rounded shadow text-gray-700 w-full;
}
</style>

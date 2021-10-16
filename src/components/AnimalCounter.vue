<template>
  <div class="flex justify-center items-center">
    <v-btn :disabled="value < 1" secondary @click="decrease">Remove</v-btn>
    <span class="w-52 text-center">{{ label }}</span>
    <v-btn secondary @click="increase">Add</v-btn>
  </div>
</template>

<script>
import VBtn from '@/components/VBtn'

export default {
  components: {
    VBtn
  },
  props: {
    species: {
      type: String,
      default: () => ''
    },
    value: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0
    }
  },
  computed: {
    label() {
      return `Current ${this.species} count: ${this.value}`
    }
  },
  methods: {
    increase() {
      this.$emit('input', this.value + 1)
    },
    decrease() {
      if (this.value > 0) this.$emit('input', this.value - 1)
    }
  }
}
</script>

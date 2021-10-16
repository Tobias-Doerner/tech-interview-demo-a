<template>
  <div>
    <div class="text-center mb-4">
      <span class="text-3xl">Farm Manager</span>
    </div>
    <animal-counter
      v-model="animal.count"
      v-for="animal in farm.animals"
      :key="animal.species"
      :species="animal.species"
    />
  </div>
</template>

<script>
import AnimalCounter from '@/components/AnimalCounter'

export default {
  components: {
    AnimalCounter
  },
  data() {
    return {
      farm: {
        animals: [
          {
            count: 0,
            species: 'cow'
          },
          {
            count: 0,
            species: 'pig'
          },
          {
            count: 0,
            species: 'sheep'
          }
        ]
      }
    }
  }
}
</script>

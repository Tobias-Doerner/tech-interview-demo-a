<template>
  <div>
    <div class="text-center mb-4">
      <span class="text-3xl">Farm Manager</span>
    </div>
    <div class="flex justify-center">
      <v-text-field
        class="max-w-xs mx-2"
        label="Farm"
        placeholder="(e.g.: Meierhof)"
        v-model="farm.name"
      />
    </div>
    <div class="m-4">
      <animal-counter
        v-model="animal.count"
        v-for="animal in farm.animals"
        :key="animal.species"
        :species="animal.species"
      />
    </div>
    <div class="flex justify-center">
      <v-btn :loading="isSaving" @click="save">Submit</v-btn>
    </div>
  </div>
</template>

<script>
import AnimalCounter from '@/components/AnimalCounter'
import VBtn from '@/components/VBtn'
import VTextField from '@/components/VTextField'
import axios from 'axios'

export default {
  components: {
    AnimalCounter,
    VBtn,
    VTextField
  },
  data() {
    return {
      baseUrl:
        'https://farmdemo-afce1-default-rtdb.europe-west1.firebasedatabase.app/farms',
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
        ],
        name: ''
      },
      isSaving: false
    }
  },
  computed: {
    queryUrl() {
      if (!this.farm.name || this.farm.name.length === 0) return undefined
      return this.baseUrl + '/' + this.farm.name + '.json'
    }
  },
  methods: {
    save() {
      if (!this.farm.name || this.farm.name.trim().length === 0) return
      this.isSaving = true
      axios
        .put(this.queryUrl, this.farm)
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          this.isSaving = false
        })
    }
  }
}
</script>

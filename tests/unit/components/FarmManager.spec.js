import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import FarmManager from '@/components/FarmManager'

jest.mock('axios')

describe('FarmManager', () => {
  describe('computed', () => {
    test('should build computed baseUrl correctly', () => {
      const wrapper = shallowMount(FarmManager)
      expect(wrapper.vm.queryUrl).toBe(undefined)
      wrapper.vm.farm.name = 'Meierhof'
      expect(wrapper.vm.queryUrl).toBe(
        'https://farmdemo-afce1-default-rtdb.europe-west1.firebasedatabase.app/farms/Meierhof.json'
      )
    })
  })

  describe('methods', () => {
    test('load method should get data from REST API', async () => {
      axios.get.mockResolvedValue({
        status: 200,
        data: {
          animals: [
            {
              count: 1,
              species: 'cow'
            },
            {
              count: 2,
              species: 'pig'
            },
            {
              count: 3,
              species: 'sheep'
            }
          ],
          name: 'Meierhof'
        }
      })

      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.load()
      expect(wrapper.vm.isLoading).toBeTruthy()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.farm).toEqual({
        animals: [
          {
            count: 1,
            species: 'cow'
          },
          {
            count: 2,
            species: 'pig'
          },
          {
            count: 3,
            species: 'sheep'
          }
        ],
        name: 'Meierhof'
      })
      expect(wrapper.vm.isLoading).toBeFalsy()
    })

    test('load method should handle error when getting data from REST API', async () => {
      axios.get.mockResolvedValue({
        status: 500,
        data: null
      })

      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.load()
      expect(wrapper.vm.isLoading).toBeTruthy()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.farm).toEqual({
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
        name: 'Meierhof'
      })
      expect(wrapper.vm.isLoading).toBeFalsy()
    })

    test('load method should handle occurring exceptions when getting data from REST API', async () => {
      axios.get.mockRejectedValue(new Error('Network Error'))
      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.load()
      expect(wrapper.vm.isLoading).toBeTruthy()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.farm).toEqual({
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
        name: 'Meierhof'
      })
      expect(wrapper.vm.isLoading).toBeFalsy()
    })

    test('save method should put data to REST API', async () => {
      axios.put.mockResolvedValue({
        status: 200,
        data: {
          animals: [
            {
              count: 1,
              species: 'cow'
            },
            {
              count: 2,
              species: 'pig'
            },
            {
              count: 3,
              species: 'sheep'
            }
          ],
          name: 'Meierhof'
        }
      })

      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.save()
      expect(wrapper.vm.isSaving).toBeTruthy()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.isSaving).toBeFalsy()
    })

    test('save method should handle error when putting data to REST API', async () => {
      axios.put.mockResolvedValue({
        status: 500,
        data: null
      })

      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.save()
      expect(wrapper.vm.isSaving).toBeTruthy()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.farm).toEqual({
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
        name: 'Meierhof'
      })
      expect(wrapper.vm.isSaving).toBeFalsy()
    })

    test('save method should handle occurring exceptions when getting data from REST API', async () => {
      axios.put.mockRejectedValue(new Error('Network Error'))

      const wrapper = shallowMount(FarmManager)
      wrapper.vm.farm.name = 'Meierhof'
      wrapper.vm.save()
      expect(wrapper.vm.isSaving).toBeTruthy()

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.farm).toEqual({
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
        name: 'Meierhof'
      })

      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.vm.isSaving).toBeFalsy()
    })
  })
})

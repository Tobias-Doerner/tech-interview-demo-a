import { mount, shallowMount } from '@vue/test-utils'
import axios from 'axios'
import FarmManager from '@/components/FarmManager'
import Home from '@/views/Home'

jest.mock('axios')

describe('Home', () => {
  describe('test', () => {
    test('should contain FarmManager component', () => {
      const wrapper = shallowMount(Home)
      const farmManager = wrapper.findComponent(FarmManager)
      expect(farmManager.exists()).toBe(true)
    })
  })

  describe('snapshot', () => {
    test('should render view correctly', async () => {
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

      const wrapper = mount(Home)
      const farmManager = wrapper.findComponent(FarmManager)
      farmManager.vm.farm.name = 'Meierhof'
      farmManager.vm.load()

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve))

      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

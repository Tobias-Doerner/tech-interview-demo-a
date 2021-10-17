import { mount, shallowMount } from '@vue/test-utils'
import VBtn from '@/components/VBtn'

describe('VBtn', () => {
  describe('computed properties', () => {
    test('classObject should set primary', () => {
      const wrapper = shallowMount(VBtn, {
        propsData: {
          primary: true,
          secondary: false
        }
      })
      expect(wrapper.vm.classObject).toEqual({ primary: true })
    })

    test('classObject should set primary', () => {
      const wrapper = shallowMount(VBtn, {
        propsData: {
          primary: true,
          secondary: true
        }
      })
      expect(wrapper.vm.classObject).toEqual({ primary: true })
    })

    test('classObject should set secondary', () => {
      const wrapper = shallowMount(VBtn, {
        propsData: {
          primary: false,
          secondary: true
        }
      })
      expect(wrapper.vm.classObject).toEqual({ secondary: true })
    })

    test('classObject should set primary as default', () => {
      const wrapper = shallowMount(VBtn)
      expect(wrapper.vm.classObject).toEqual({ primary: true })
    })
  })

  describe('events', () => {
    test('button should emit click event', async () => {
      const wrapper = shallowMount(VBtn)
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })

  describe('snapshot tests', () => {
    test('should render button with loading spinner correctly', () => {
      const wrapper = mount(VBtn, {
        propsData: {
          loading: true
        },
        slots: {
          default: 'Submit'
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })

    test('should render button without loading spinner correctly', () => {
      const wrapper = mount(VBtn, {
        slots: {
          default: 'Submit'
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

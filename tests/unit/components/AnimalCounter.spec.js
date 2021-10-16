import { mount, shallowMount } from '@vue/test-utils'
import AnimalCounter from '@/components/AnimalCounter'

describe('AnimalCounter', () => {
  describe('props', () => {
    test('custom validator function of value property should work correctly', () => {
      const wrapper = shallowMount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 0
        }
      })
      const validator = wrapper.vm.$options.props.value.validator
      expect(validator(-999)).toBe(false)
      expect(validator(-1)).toBe(false)
      expect(validator(0)).toBe(true)
      expect(validator(1)).toBe(true)
      expect(validator(999)).toBe(true)
    })

    test('test default values', () => {
      const wrapper = shallowMount(AnimalCounter)
      expect(wrapper.vm.species).toEqual('')
      expect(wrapper.vm.value).toEqual(0)
    })
  })

  describe('computed properties', () => {
    test('label should be set correctly', () => {
      const wrapper = shallowMount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 123
        }
      })
      expect(wrapper.vm.label).toBe('Current cow count: 123')
    })
  })

  describe('methods', () => {
    test('increase method should emit input event correctly', async () => {
      const wrapper = shallowMount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 123
        }
      })
      wrapper.vm.increase()

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('input')).toBeTruthy()
      expect(wrapper.emitted('input').length).toBe(1)
      expect(wrapper.emitted('input')[0]).toEqual([124])
    })

    test('decrease method should emit input event correctly', async () => {
      const wrapper = shallowMount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 123
        }
      })
      wrapper.vm.decrease()

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('input')).toBeTruthy()
      expect(wrapper.emitted('input').length).toBe(1)
      expect(wrapper.emitted('input')[0]).toEqual([122])
    })

    test('decrease method should emit input event correctly', async () => {
      const wrapper = shallowMount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 0
        }
      })
      wrapper.vm.decrease()

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted().input).toBeFalsy()
    })
  })

  describe('snapshot test', () => {
    test('should render correctly', () => {
      const wrapper = mount(AnimalCounter, {
        propsData: {
          species: 'cow',
          value: 123
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

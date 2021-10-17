import { shallowMount } from '@vue/test-utils'
import VTextField from '@/components/VTextField'

describe('VTextField', () => {
  describe('props test', () => {
    test('props should use a default value if not specified', () => {
      const wrapper = shallowMount(VTextField)
      expect(wrapper.vm.label).toBe('')
      expect(wrapper.vm.placeholder).toBe('')
      expect(wrapper.vm.value).toBe('')
    })
  })

  describe('v-model test', () => {
    test('text input field should emit input event if text changes', async () => {
      const wrapper = shallowMount(VTextField, {
        propsData: {
          label: 'Farm',
          placeholder: '(e.g. Meierhof)',
          value: ''
        }
      })
      const textInput = wrapper.find('input[type="text"]')
      await textInput.setValue('Meierhof')
      expect(wrapper.emitted().input).toBeTruthy()
      expect(wrapper.emitted().input[0]).toEqual(['Meierhof'])
    })
  })
})

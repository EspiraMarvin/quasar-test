import { mount } from '@vue/test-utils'
import Calendar from 'components/dashboard/Task/Calendar'

describe('Calendar Component Unit Tests:', () => {
  test('is a vue instance', () => {
    const wrapper = mount(Calendar, {
      propsData: {
        currentDate: '23 December, Sunday'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the current date', () => {
    const todayDate = '23 December, Sunday'
    const wrapper = mount(Calendar, {
      propsData: {
        currentDate: todayDate
      }
    })
    expect(wrapper.html()).toContain(todayDate)
  })
})

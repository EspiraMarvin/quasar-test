import { mount } from '@vue/test-utils'
import TasksList from 'components/dashboard/Task/TasksList.vue'

describe('TasksList Component Unit Tests:', () => {
  test('is a vue instance', () => {
    const wrapper = mount(TasksList, {
      propsData: {
        task: {
          title: 'Send benefit review by Sunday',
          tag: 'Reminder'
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the task title', () => {
    const taskTitle = 'Send benefit review by Sunday'
    const wrapper = mount(TasksList, {
      propsData: {
        task: {
          title: taskTitle,
          tag: 'Reminder'
        }
      }
    })
    expect(wrapper.html()).toContain(taskTitle)
  })
})

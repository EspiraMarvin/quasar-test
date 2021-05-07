import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import QBUTTON from './demo/QBtn-demo.vue'
import * as All from 'quasar'
import Child from '../__tests__/Child'
import Parent from '../__tests__/Parent'
import User from '../__tests__/User'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Quasar', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  const wrapper = mount(QBUTTON, {
    localVue
  })
  const vm = wrapper.vm

  it('has a created hook', () => {
    expect(typeof vm.increment).toBe('function')
  })

  it('accesses the shallowMount', () => {
    expect(vm.$el.textContent).toContain('rocket muffin')
    expect(wrapper.text()).toContain('rocket muffin') // easier
    expect(wrapper.find('p').text()).toContain('rocket muffin')
  })

  it('sets the correct default data', () => {
    expect(typeof vm.counter).toBe('number')
    const defaultData2 = QBUTTON.data()
    expect(defaultData2.counter).toBe(0)
  })

  it('correctly updates data when button is pressed', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(vm.counter).toBe(1)
  })

  test('should render username, then hide it', async () => {
    const wrapper = mount(User)
    expect(wrapper.text()).toMatch(/username/)

    await wrapper.setData({
      show: false
    })

    expect(wrapper.text()).not.toMatch(/username/)
  })

  test('should render username', async () => {
    const wrapper = mount(User, {
      data () {
        return {
          show: true
        }
      }
    })

    expect(wrapper.text()).toMatch(/username/)
  })

  test('should not render username', async () => {
    const wrapper = mount(User, {
      data () {
        return {
          show: false
        }
      }
    })

    expect(wrapper.text()).not.toMatch(/username/)
  })

  test('triggers a click', async () => {
    const wrapper = mount(User)

    await wrapper.trigger('click')
  })

  test('button triggers click', async () => {
    const wrapper = mount(User)

    await wrapper.find('button').trigger('click')
  })

  test('button click on parent', async () => {
    const wrapper = mount(Parent)

    await wrapper.find('button').trigger('click')
  })

  test('button click on child', async () => {
    const wrapper = mount(Child)

    await wrapper.find('button').trigger('click')
  })
})

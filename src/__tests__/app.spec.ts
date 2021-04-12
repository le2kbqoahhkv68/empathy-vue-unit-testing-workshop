import { mount } from '@vue/test-utils'
import App from '../app.vue'
import axios from "axios";

describe('App tests', () => {

  test('mocking $http', async () => {
    const optionsStub = ['x', 'y', 'z']

    const mockHttp = {
      get: () => {
        return new Promise((resolve, reject) => {
          resolve({ data: optionsStub })
        })
      }
    }

    const wrapper = mount(App, {
      mocks: {
        $http: mockHttp
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.x-options').text()).toBe(optionsStub.join());
  })

  test.only('mocking with jest fn', async () => {
    const optionsStub = ['x', 'y', 'z']

    jest.mock('axios');
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: optionsStub }))

    const wrapper = mount(App)

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.x-options').text()).toBe(optionsStub.toString());
  })
})

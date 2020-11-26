import { mount, shallowMount } from '@vue/test-utils'
import Task from './Task'

// describe("Task.test.js", () => {
//   let cmp;

//   beforeEach(() => {
//     cmp = mount(Task, {
//       propsData: {
//         task: {
//           edges: [
//             {
//               node: {
//                 number: 1,
//                 name: 'Name 1'
//               }
//             },
//             {
//               node: {
//                 number: 2,
//                 name: 'Name 2'
//               }
//             }
//           ]
//         }
//       }
//     });
//   });

describe('test AppHeader', () => {
  it('test title', () => {
   const wrapper = shallowMount(Task, {
     propsData: {
      task: {
        number: 1,
        title: 'Name 1',
        author: {
          login: 'test login'
        },
        labels: {
          edges: [
            {
              node: {
                name: 'test name'
              }
            }
          ]
        },
        comments: {
          totalCount: 1
        }
      }
     },
     stubs: ['router-link']
    })
    expect(wrapper.find('.task__title-link').text().includes('Name 1')).toBe(true)
    expect(wrapper.find('.task__labels > .task__label').text().includes('test name')).toBe(true)
    expect(wrapper.find('.task__info').text().includes('test login')).toBe(true)
  })
})

describe('test is task opened', () => {
  it('test title', () => {
   const wrapper = shallowMount(Task, {
     propsData: {
      task: {
        closed: false,
        number: 1,
        title: 'Name 1',
        author: {
          login: 'test login'
        },
        labels: {
          edges: [
            {
              node: {
                name: 'test name'
              }
            }
          ]
        },
        comments: {
          totalCount: 1
        }
      }
     },
     stubs: ['router-link']
    })
    expect(wrapper.find('.task__status').classes('task__status--open')).toBe(true)
  })
})
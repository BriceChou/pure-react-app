import type { ActionType } from '.'

const UPDATE = 'TSET_UPDATE'

export const initTestState: TestSateType = {
  hello: '',
}

export interface TestSateType {
  hello: string
}

/**
 * actions to update test function
 *
 * @param text
 */
export const updateTest = (text: string) => ({
  type: UPDATE,
  payload: {
    hello: text,
  },
})

/**
 *
 * init reducer with test
 *
 * @param state test init state
 * @param action dispatch value
 */
export default function testReducer(state = initTestState, action: ActionType<TestSateType>): TestSateType {
  const { type, payload } = action
  switch (type) {
    case UPDATE:
      return {
        ...state,
        ...payload,
      }
    default:
  }
  return state
}

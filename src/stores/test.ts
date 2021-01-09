import type { ActionType } from '.'

const UPDATE = 'TSET_UPDATE'

const initState: SateType = {
  hello: '',
}

export interface SateType {
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
export default function testReducer(state = initState, action: ActionType<SateType>): SateType {
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

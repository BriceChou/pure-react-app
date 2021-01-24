import { createReducer, createAction } from '@stores/utils'

export interface TestSateType {
  count: number
  hello: string
}

const UPDATE = 'TSET_UPDATE',
  ADD = 'TEST_ADD',
  REMOVE = 'TEST_REMOVE'

export const initTestState: TestSateType = {
  count: 0,
  hello: 'init hello',
}

/**
 *
 * init reducer with test
 *
 * @param state test init state
 * @param action dispatch value
 */
const testReducer = createReducer<TestSateType>(initTestState, {
  [UPDATE]: (prev, next) => ({
    ...prev,
    ...next,
  }),
  [ADD]: prev => ({ ...prev, count: ++prev.count }),
  [REMOVE]: prev => ({ count: prev.count ? --prev.count : prev.count }),
})

export const addTest = createAction(ADD)
export const removeTest = createAction(REMOVE)
export const updateTest = createAction(UPDATE, 'hello')

export default testReducer

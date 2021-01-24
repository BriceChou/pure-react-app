import testReducer from './test'
import { initTestState } from './test'
import { combineReducers } from 'redux'
import type { TestSateType } from './test'

export interface RootStateType {
  testState: TestSateType
}

export const rootInitState: RootStateType = {
  testState: initTestState,
}

export const rootReducer = combineReducers({
  testState: testReducer,
})

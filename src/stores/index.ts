import { combineReducers } from 'redux'
import type { TestSateType } from './test'
import testReducer, { initTestState } from './test'

export interface ActionType<T> {
  payload: T
  type: string
}

export const rootInitState: RootStateType = {
  testState: initTestState,
}

export interface RootStateType {
  testState: TestSateType
}

export const rootReducer = combineReducers({
  testState: testReducer,
})

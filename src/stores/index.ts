import testReducer from './test'
import { combineReducers } from 'redux'

export interface ActionType<T> {
  type: string
  payload: T
}

export default combineReducers({
  testReducer,
})

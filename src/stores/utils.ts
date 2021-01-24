export type ReducerHandleType<T> = {
  [propsName: string]: (prev: T, next: T) => T
}

export interface ActionType<T> {
  payload: T
  type: string
}

/**
 * EXAMPLE:
 * const ADD_TODO = 'ADD_TODO'
 * export const addTodo = makeActionCreator(ADD_TODO, 'text')
 *
 * @param type action type name
 * @param argNames all arguments
 */
export function createAction(type: string, ...argNames: any[]) {
  return function (...args: any[]) {
    const payload: { [propsName: string]: any } = {}
    argNames.forEach((arg, index) => {
      payload[argNames[index]] = args[index]
    })
    return { type, payload }
  }
}

/**
 * auto create reducer [自动创建 reducer]
 * refer to: <http://cn.redux.js.org/docs/recipes/ReducingBoilerplate.html>
 *
 * @param initialState T 初始化 state
 * @param handlers ReducerHandleType<T> 目标处理函数
 */
export const createReducer = <T>(initialState: T, handlers: ReducerHandleType<T>) => (
  state = initialState,
  action: ActionType<T>,
) => (handlers.hasOwnProperty(action?.type) ? handlers[action?.type](state, action.payload) : state)

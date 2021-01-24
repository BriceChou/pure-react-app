import { combineReducers, createStore } from 'redux'

export function createReducerManager(initialReducers) {
  // 创建一个将 key 映射到 reducer 的对象
  const reducers = { ...initialReducers }

  // 创建初始 CombinedReducer
  let combinedReducer = combineReducers(reducers)

  // 存储 key 的数组，用于删除 reducer 时删除 state 中对应的数据
  const keysToRemove = []

  return {
    getReducerMap: () => reducers,

    // 这个 root reducer 函数在该对象中暴露出
    // 并将传递给 store
    reduce: (state, action) => {
      // 如果已删除任何 reducer，请先清理 state 中对应的值
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action)
    },

    // 添加具有指定 key 的新 reducer
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return
      }

      // 将 reducer 添加到 reducer 映射中
      reducers[key] = reducer

      // 生成新的 combined reducer
      combinedReducer = combineReducers(reducers)
    },

    // 使用指定的 key 删除 reducer
    remove: key => {
      if (!key || !reducers[key]) {
        return
      }

      // 从 reducer 映射中删除它
      delete reducers[key]

      // 将 key 添加到要清理的 key 列表中
      keysToRemove.push(key)

      // 生成新的 combined reducer
      combinedReducer = combineReducers(reducers)
    },
  }
}

const staticReducers = {
  users: usersReducer,
  posts: postsReducer,
}

export function configureStore(initialState) {
  const reducerManager = createReducerManager(staticReducers)

  // 使用 root reducer 函数创建一个 store，该 root reducer 函数是 manager 暴露出的函数。
  const store = createStore(reducerManager.reduce, initialState)

  // 可选：将 reducer manager 添加到 store 上，以便于访问
  store.reducerManager = reducerManager
}

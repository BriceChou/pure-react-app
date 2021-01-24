import { RootStateType } from '@stores'
import { createStore, combineReducers, Store } from 'redux'

type StoreExtendsType = Store & {
  asyncReducers: any
  injectReducer: (key: string, asyncReducer: any) => void
}

// 定义将始终存在于应用程序中的 Reducer
const staticReducers = {}

// Configure the store
export default function configureStore(initialState: RootStateType) {
  const store: StoreExtendsType = createStore(createReducer(), initialState)

  // 添加一个对象以跟踪已注册的异步 Reducer
  store.asyncReducers = {}

  //创建注入 reducer 函数
  // 此函数添加 async reducer，并创建一个新的组合 reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(this.asyncReducers))
  }

  // 返回修改后的 store
  return store
}

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  })
}


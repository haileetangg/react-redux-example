// 这个文件专门用来暴露一个对象，整个应用只有一个store对象

//用于创建redux中最核心的store对象
import { createStore,applyMiddleware,combineReducers } from 'redux'
//引入为count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

//引入redux-thunk用于支持异步action
import {thunk} from 'redux-thunk'

//汇总所有reducer变为一个总的reducer
const allReducer = combineReducers({
  countTotal:countReducer,
  persons:personReducer
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk))

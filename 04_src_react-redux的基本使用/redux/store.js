// 这个文件专门用来暴露一个对象，整个应用只有一个store对象

//用于创建redux中最核心的store对象
import { createStore,applyMiddleware } from 'redux'
//引入为count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk用于支持异步action
import {thunk} from 'redux-thunk'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk))

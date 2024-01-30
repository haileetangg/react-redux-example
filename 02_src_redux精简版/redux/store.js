// 这个文件专门用来暴露一个对象，整个应用只有一个store对象

//用于创建redux中最核心的store对象
import { createStore } from 'redux'
//引入为count组件服务的reducer
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer)

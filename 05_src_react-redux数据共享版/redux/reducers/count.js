// 该文件是为count组件服务的reducer，reducer本质上是一个函数
// reducer会接收两个参数，一个是之前的状态preState，一个是动作对象action
import { INCREMENT,DECREMENT } from '../constant'

const initState = 0
export default function countReducer(preState=initState,action){
  console.log(preState,'preState')
  const { type,data } = action
  switch(type){
    case INCREMENT:
      return  preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
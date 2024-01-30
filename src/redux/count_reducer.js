// 该文件是为count组件服务的reducer，reducer本质上是一个函数
// reducer会接收两个参数，一个是之前的状态preState，一个是动作对象action

const initState = 0
export default function countReducer(preState=initState,action){
  console.log(preState,'preState')
  const { type,data } = action
  switch(type){
    case "increment":
      return  preState + data
    case "decrement":
      return preState - data
    default:
      return preState
  }
}
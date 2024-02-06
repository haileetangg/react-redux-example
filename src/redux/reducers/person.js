import { ADD_PERSON } from "../constant"

const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){
  console.log(action,'action')
  const { type,data } = action
  switch(type){
    case ADD_PERSON:
      // console.log([data.data,...preState],'[data,...preState]')
      return [data.data,...preState]
    default:
      return preState
  }
}
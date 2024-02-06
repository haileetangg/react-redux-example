//引入常量
import { ADD_PERSON } from "../constant"

//创建添加一个人的action对象
export const addPersonAction = personObj=>{
    console.log(personObj,'personObj')
    return  {type:ADD_PERSON,data:personObj}
}
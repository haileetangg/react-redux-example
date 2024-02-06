//引入Count的UI组件
import CountUI from '../../components/Count'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
//引入connect用于连接UI与redux
import { connect } from 'react-redux'

//使用connect()()创建并暴露一个Count的容器组件
// connect(mapStateToProps,mapDispatchToProps),connect接收两个参数，两个参数都是函数
export default connect(

  //该函数的返回值作为状态传递给了UI组件
  (state)=>({count:state}),
  
  //写法一： 该函数的返回值作为操作状态的方法传递给了UI组件,这个是函数写法，但是它有简写形式
  // (dispatch)=>({
  //   jia:number=> dispatch(createIncrementAction(number)),
  //   jian:number => dispatch(createDecrementAction(number)),
  //   asyncJia:(number,time)=> dispatch(createIncrementAsyncAction(number,time))
  // })

  // 写法二：mapDispatchToProps的简写形式,这里写成了一个对象的形式是因为这里react-redux有自动分发功能
  {
    jia: createIncrementAction,
    jian:createDecrementAction,
    asyncJia:createIncrementAsyncAction
  }
  )(CountUI)
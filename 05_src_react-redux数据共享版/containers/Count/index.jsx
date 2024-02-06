import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/actions/count'

//定义UI组件
class Count extends React.Component {
  async componentDidMount(){
    try {
      const response = await axios.get('/data.json');
      console.log(response, 'res');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  increment = () =>{
    const { value } = this.selectNumber
    this.props.jia(value*1)
  }
  decrement= () =>{
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }
  incrementOdd= () =>{
    const { value } = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }
  incrementAsync= () =>{
    const { value } = this.selectNumber
    this.props.asyncJia(value*1,500)
  }
  render() {
    console.log(this.props,'this.props')
    return (
      <div>
        <h1>Count组件</h1>
        <h2>当前求和为:{this.props.count},当前总人数为：{this.props.personTotal.length}</h2>
        <select ref={c => this.selectNumber = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步再加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
export default connect(
  (state)=>({
    count:state.countTotal,
    personTotal:state.persons}),
  {
    jia: createIncrementAction,
    jian:createDecrementAction,
    asyncJia:createIncrementAsyncAction
  }
  )(Count)
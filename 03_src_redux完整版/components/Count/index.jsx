import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction } from '../../redux/count_action'
import { INCREMENT,DECREMENT } from '../../redux/constant'

export default class Count extends Component {
  state = {
    // count:0
  }
  componentDidMount(){
    //检测redux中状态的变化，只要变化就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  increment = () =>{
    const { value } = this.selectNumber
    // 通知redux + value
    store.dispatch(createIncrementAction(value*1))
  }
  decrement= () =>{
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  incrementOdd= () =>{
    const { value } = this.selectNumber
    const count  = store.getState()
    if(count % 2 != 0){
      store.dispatch({type:INCREMENT,data:value*1})
    }
  }
  incrementAsync= () =>{
    const { value } = this.selectNumber
    const count  = store.getState()
    setTimeout(()=>{
      store.dispatch({type:DECREMENT,data:value*1})
    },500)
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
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

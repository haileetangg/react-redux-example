import React, { Component } from 'react'

export default class Count extends Component {
  increment = () =>{
    const { value } = this.selectNumber
  }
  decrement= () =>{
    const { value } = this.selectNumber
  }
  incrementOdd= () =>{
    const { value } = this.selectNumber
  }
  incrementAsync= () =>{
    const { value } = this.selectNumber
  }
  render() {
    console.log(this.props,'this.props')
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
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

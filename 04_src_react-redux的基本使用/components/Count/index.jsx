import React, { Component } from 'react'
import axios from 'axios'

export default class Count extends Component {
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

import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'
import { ADD_PERSON } from '../../redux/constant'

class Person extends Component {
    add = ()=>{
      const name = this.nameNode.value
      const age = this.ageNode.value
      const personObj = {id:nanoid(),name,age}
      this.props.addPerson({type:ADD_PERSON,data:personObj})
    }
  render() {
    console.log(this.props,'personProps')
    return (
      <div>
        <h1>我是person组件,上方组件求和为：{this.props.countTotal}</h1>
        <input ref={c=>this.nameNode = c} placeholder='请输入姓名'/>
        <input ref={c=>this.ageNode = c} placeholder='请输入年龄'/>
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.persons.map((p)=><li key={p.id}>{p.name}--{p.age}</li>)}
        </ul>
      </div>
    )
  }
}
export default connect(
  state => ({
    countTotal:state.countTotal,
    persons:state.persons}),
  {addPerson:addPersonAction}
)(Person)

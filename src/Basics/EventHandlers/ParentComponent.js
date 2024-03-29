import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  
constructor(props) {
    super(props)

    this.state = {
        parentName: 'Parent'
    }

    this.greatParent = this.greatParent.bind(this)
}  

greatParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
}
    render() {
    return (
      <div>
        <ChildComponent greetHandler ={this.greatParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
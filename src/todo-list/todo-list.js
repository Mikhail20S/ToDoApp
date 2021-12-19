import React, { Component } from 'react'
import TodoItem from '../todo-item'

export default class TodoList extends Component {
  constructor (props) {super(props)}

  render () {
    return (
      <div className='list-group'>
        {
          this.props.todos.map(x => {
            return <TodoItem id={x.id} name={x.name} description={x.description}
                             completed={x.completed}
            onChecked={this.props.onChecked}/>
          })
        }
      </div>
    )
  }
}
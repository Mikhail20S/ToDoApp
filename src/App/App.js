import React, { Component } from 'react'
import AddTodo from '../add-todo/add-todo'
import TodoList from '../todo-list/todo-list'

import './App.css'

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      addTodo: false,
      todos: []
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleNewTodo = this.handleNewTodo.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.handleCloseAddTodo = this.handleCloseAddTodo.bind(this)
  }

  handleAddTodo () {
    this.setState({ addTodo: true })
  }

  handleNewTodo (todo) {
    this.setState(st => ({addTodo: false, todos: [...st.todos, todo]}))
  }

  handleChecked (id, checked) {
    const todo = this.state.todos.find(x => x.id === id)
    const todoIdx = this.state.todos.findIndex(x => x.id === id)
    todo.completed = checked
    console.log('handleChecked', todo, todoIdx)
    this.setState(st => ({addTodo: st.addTodo, todos: [
        ...st.todos.slice(0, todoIdx),
        todo,
        ...st.todos.slice(todoIdx + 1)
      ]}))
  }

  handleCloseAddTodo () {
    this.setState({ addTodo: false })
  }

  render () {
    console.log('render App', this.state)
    if (this.state.addTodo) {
      return <AddTodo onAddTodo={this.handleNewTodo} onCloseAddTodo={this.handleCloseAddTodo}/>
    }
    return (
      <div className='app'>
        <h1>Have to do App</h1>
        <TodoList todos={this.state.todos} onChecked={this.handleChecked}/>
        <button className="btn btn-primary" onClick={this.handleAddTodo}>Новая задача</button>
      </div>
    )
  }
}

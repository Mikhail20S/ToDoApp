import React, { Component } from 'react'

import './add-todo.css'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount () {
    this.setState({ name: '', description: '' })
  }

  handleInput (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddTodo () {
    this.props.onAddTodo({
      id: Math.floor(Math.random() * 1000000),
      name: this.state.name,
      description: this.state.description,
      completed: false
    })
  }

  handleBack() {
    this.props.onCloseAddTodo()
  }

  render () {
    const { name, description } = this.state
    return (
      <div className="add-todo">
        <input name="name" type="text" className="form-control" placeholder="Название"
               value={name === undefined ? '' : name}
               onChange={this.handleInput}/>
        <textarea name="description" className="form-control" id="exampleTextarea" rows="2" placeholder="Описание"
                  value={description === undefined ? '' : description} onChange={this.handleInput}/>
        <button type="submit" className="btn btn-primary" onClick={this.handleAddTodo}>Добавить</button>
        <button className='btn btn-secondary' onClick={this.handleBack}>Вернуться назад</button>
      </div>
    )
  }
}
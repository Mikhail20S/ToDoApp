import React, { Component } from 'react'

import './todo-item.css'

export default class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox (event) {
    console.log('checkbox', event.target.name, event.target.checked)
    this.props.onChecked(this.props.id, event.target.checked)
  }

  render () {
    console.log('render todo-item props:', this.props)
    const { id, name, description, completed } = this.props
    const style = completed ? {textDecoration: 'line-through', color: 'rgb(143,143,143)'} : null
    return (
      <div id={id} className='todo-item'>
        <input name='checkbox' className="form-check-input checkbox" type="checkbox" id={id} onChange={this.handleCheckbox}/>
        <div className='name-description'>
          <h5 id={`${id}_name`} className='name' style={style}>
            {name}
          </h5>
          <p id={`${id}_description`} className='description' style={style}>
            {description}
          </p>
        </div>

      </div>
    )
  }
}
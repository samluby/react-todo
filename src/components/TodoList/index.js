import React, { Component } from 'react'

import TodoItem from './TodoItem'

class TodoList extends Component {

    render () {
        const { todos, changeComputed } = this.props
        return (
            <ul>
                {
                    todos.map(todo => <TodoItem key={todo.id} {...todo} changeComputed={changeComputed} />)
                }
            </ul>
        )
    }
}

export default TodoList
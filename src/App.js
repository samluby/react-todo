import React, { Component } from 'react'
import { TodoHeader, TodoList, TodoInput } from './components'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'work',
                    computed: false
                },
                {
                    id: 2,
                    title: 'book',
                    computed: true
                }
            ]
        }
    }
    changeComputed = (id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.computed = !todo.computed
            }
            return todo
        })
        this.setState({
            todos: todos
        })
    }
    addTodo = (title) => {
        this.setState({
            todos: this.state.todos.concat({
                id: Math.random(),
                title: title,
                computed: false
            })
        })
    }
    render () {
        const { todos } = this.state
        return (
            <>
                <TodoHeader title="待办列表" />
                <TodoInput btnText="add" addTodo={this.addTodo} />
                <TodoList todos={todos} changeComputed={this.changeComputed} />
            </>
        )
    }
}

export default App
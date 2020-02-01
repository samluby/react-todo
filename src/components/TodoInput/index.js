import React, { Component, createRef } from 'react'


class TodoInput extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.inputDom = createRef()
    }

    handlerKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.hanlderClick()
        }
    }

    handlerInputChange = (e) => {
        const value = e.currentTarget.value
        this.setState({
            value: value
        })
    }

    hanlderClick = () => {
        const { value } = this.state
        if (value === '') return
        const { addTodo } = this.props
        addTodo(value)
        this.setState({
            value: ''
        }, () => this.inputDom.current.focus())
    }

    render () {
        const { value } = this.state
        const { btnText } = this.props
        return (
            <>
                <input type="text" value={value} onChange={this.handlerInputChange} onKeyUp={this.handlerKeyUp} ref={this.inputDom} />
                <button onClick={this.hanlderClick}>{btnText}</button>
            </>
        )
    }
}

export default TodoInput
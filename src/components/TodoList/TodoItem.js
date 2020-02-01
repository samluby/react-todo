import React, { Component } from 'react'

class TodoItem extends Component {


    handlerCheckChange = () => {
        const { changeComputed, id } = this.props
        changeComputed(id)
    }

    render () {
        const { title, computed } = this.props
        return (
            <li>
                <input type="checkbox" checked={computed} onChange={this.handlerCheckChange} />
                <span>{title}</span>
                <span>{computed ? '完成' : '未完成'}</span>
            </li>
        )
    }
}

export default TodoItem
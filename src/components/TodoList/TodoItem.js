import React, { PureComponent } from 'react'

/**
 * PureComponent 也只是浅比较， 当需要更深层的比较的时候需要使用shoudComponentUpdate
 */
class TodoItem extends PureComponent {


    handlerCheckChange = () => {
        const { changeComputed, id } = this.props
        changeComputed(id)
    }

    // shouldComponentUpdate (nextProps) {
    //     return nextProps.computed !== this.props.computed
    // }

    render () {
        const { title, computed } = this.props
        console.log(`render ${title}`)
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
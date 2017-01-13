const React = require("react")
const Hilt = require("hilt/react")

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let list = ["ul"].concat(this.props.data.map(
            task => ["li", {className: task.done ? "task-done" : ""}, task.text]
        ))

        return Hilt.compileReact(list)
    }
}

module.exports = TodoList

const React = require("react")
const ReactDOM = require("react-dom")
const Hilt = require("hilt/react")

const TodoList = require("./components/todolist.js")

class Program extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [
                {done: true, text: "Make a template"},
                {done: false, text: "Make a good example"},
                {done: false, text: "Be original with the example"},
                {done: false, text: "..."}
            ]
        }
    }

    render() {
        let app = ["div",
            ["h2", "To Do:"],
            [TodoList, {data: this.state.tasks}]
        ]

        return Hilt.compileReact(app)
    }
}

module.exports = function() {
    ReactDOM.render(Hilt.compileReact([Program]), document.getElementById("app"))
}

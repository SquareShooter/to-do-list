import React from 'react';
import Todo from '../../components/TodoList/ToDo/ToDo';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            todos: [
                {
                    text: 'First note'
                },
                {
                    text: 'Second note'
                }]
        };
    };

    createNote = () => {
        const newText = {};
        newText.text = this.state.inputText;
        this.state.todos.push(newText);
        this.setState({todos: this.state.todos, inputText: ''});
    };

    createNoteOnKeyDown = (event) => {
        const enterKey = 13;

        if (event.keyCode === enterKey) {
            this.createNote();
        }
    };

    addItem = (event) => {
        this.setState({inputText: event.target.value});
    };

    removeItem = (index) => {
        const todos = this.state.todos.filter((todo, i) => {
            return i !== index
        });
        this.setState({todos: todos});
    };

    saveItemText = (index, changedText) => {
        const todos = this.state.todos;

        todos.forEach((todo, i) => {
            if (index === i) {
                todo.text = changedText;
            }
        });
        this.setState({todos: todos});
    };

    render() {
        const items = this.state.todos,
            enabled = this.state.inputText.length > 0;

        return (
            <div className="container">
                <h2>To Do list ({this.state.todos.length} items)</h2>
                {items.map((item, i) => <Todo key={i} text={item.text} index={i} removeItem={this.removeItem} changeItemText={this.changeItemText} saveItemText={this.saveItemText} />)}
                <div className="todo__add">
                    <input type="text" onChange={this.addItem} onKeyDown={this.createNoteOnKeyDown} value={this.state.inputText} />
                    <button onClick={this.createNote} disabled={!enabled}>Create</button>
                </div>
            </div>
        )
    }
}

export default TodoList;
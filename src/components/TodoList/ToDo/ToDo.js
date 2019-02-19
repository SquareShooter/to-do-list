import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            changedText: this.props.text,
        };
    };

    startEdit = () => {
        this.setState({editing: true});
    };

    finishEdit = () => {
        this.setState({editing: false});
    };

    changeText = (event) => {
        this.setState({changedText: event.target.value});
    };

    saveText = () => {
        this.props.saveItemText(this.props.index, this.state.changedText);
        this.finishEdit();
    };

    cancelEdit = () => {
        this.finishEdit();
    };

    removeItem = () =>  {
        this.props.removeItem(this.props.index);
    };

    render() {
        const {editing} = this.state;

        return (
            <div className="todo">
                {editing ? (
                    <textarea defaultValue={this.props.text} onChange={this.changeText} rows="1" />
                ) : (
                    <span className="todo__text">{this.props.text}</span>
                )}
                <span className="todo__actions">
                    {editing ? (
                        <span>
                            <span className="todo__action todo__action--edit-save" onClick={this.saveText}>Save</span>
                            <span className="todo__action todo__action--edit-cancel" onClick={this.cancelEdit}>Cancel edit</span>
                        </span>
                    ) : (
                        <span className="todo__action todo__action--edit text-lg" onClick={this.startEdit}>&#9998;</span>
                    )}
                    <span className="todo__action todo__action--remove text-lg" onClick={this.removeItem}>&times;</span>
                </span>
            </div>
        )
    }
}

export default Todo;
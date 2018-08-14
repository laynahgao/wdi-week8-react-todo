import React, {Component} from 'react';
import TodoForm from './TodoForm.js';

class Todo extends Component {
    constructor() {
      super();
      this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
      this.editClickedTodo = this.editClickedTodo.bind(this);
    }
    deleteClickedTodo() {
      this.props.onDeleteTodo(this.props.todo);
    }
    editClickedTodo() {
        this.props.onEditTodo(this.props.todo)
    }
    render(){
      return(
        <span data-todos-index={this.props.todo.id}>
        <span onClick={ this.editClickedTodo }>
        <TodoForm
  autoFocus={true}
  buttonName="Update Todo!"
  onUpdateTodo={this.props.onUpdateTodo} />
        
        </span>
        { this.props.editingTodoId === this.props.todo._id ? `${this.props.todo.body} is being edited` : '' }
        <span
          className='deleteButton'
          onClick={ this.deleteClickedTodo }>
            (X)
        </span>
      </span>
      )
    }
  }
export default Todo
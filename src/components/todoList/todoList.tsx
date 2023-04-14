import React from "react";
import TodoItem from "../todoItem"
import styles from './todoList.module.scss';

function TodoList({
                      todos,
                      toggleTodo,
                      deleteTodo,
                      editTodo
                  }: {
    todos: Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, description: string, editedDate: number) => void;
}) {

    return (
        todos.length > 0 ?
            <ul className="todo-list">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
            : null
    );
}

export default TodoList;

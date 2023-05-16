import React from 'react'
import TodoItem from '../todoItem'

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}: {
  todos: Todo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, description: string, editedDate: number) => void
}) {
  const completedTodos = todos.filter(todo => todo.completed)
  const incompleteTodos = todos.filter(todo => !todo.completed)

  return (
    <>
      {incompleteTodos.length > 0 && (
        <>
          <h2>Tasks - {incompleteTodos.length}</h2>
          <ul className="todo-list bg-gray-800/60 rounded-[22px] px-4 py-2 my-4 drop-shadow-lg backdrop-blur-sm divide-y-2 divide-teal-500 divide-dashed">
            {incompleteTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </ul>
        </>
      )}
      {completedTodos.length > 0 && (
        <>
          <h2>Completed - {incompleteTodos.length}</h2>
          <ul className="todo-list bg-gray-800/60 rounded-[22px] px-4 py-2 my-4 drop-shadow-lg backdrop-blur-sm divide-y-2 divide-teal-500 divide-dashed">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default TodoList

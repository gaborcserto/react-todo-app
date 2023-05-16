import React, { useState } from 'react'
import { MdEdit, MdDelete, MdSave, MdCancel, MdCheck } from 'react-icons/md'
import TodoButtons from '../todoButtons'
import './todoItem.scss'

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: {
  todo: Todo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, description: string, editedDate: number) => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState(todo.description)

  function handleToggle() {
    toggleTodo(todo.id)
  }

  function handleDelete() {
    deleteTodo(todo.id)
  }

  function handleEdit() {
    setIsEditing(true)
  }

  function handleSave() {
    if (description.trim()) {
      editTodo(todo.id, description, Date.now())
      setIsEditing(false)
    }
  }

  function handleCancel() {
    setIsEditing(false)
    setDescription(todo.description)
  }
  //todo-item bg-gray-800/60 rounded-[20px] p-4 my-4 drop-shadow-lg backdrop-blur-sm
  return (
    <li className={`todo-item py-4 px-2 ${todo.completed ? 'todo-item--completed' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="flex w-full">
          <label htmlFor={todo.id} className="todo-item__checkbox shrink-0">
            <input
              id={todo.id}
              className="hidden"
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <div className="todo-item__checkbox__wrapper w-5 h-5 rounded-[5px] border-2 border-cyan-500 transition-all duration-200">
              <MdCheck className="checkmark w-4 h-4 text-gray-600" />
            </div>
          </label>
          <div className="flex-1">
            {isEditing ? (
              <>
                <div className="w-full px-2">
                  <input
                    className="bg-gray-800 text-gray-100 border-2 border-gray-600 rounded-full px-2 w-full bg-transparent/20"
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <p className="todo-item__description text-gray-400 px-4" onClick={handleToggle}>
                  {todo.description}
                </p>
              </>
            )}
          </div>
          <div className="shrink-0">
            <TodoButtons
              isEditing={isEditing}
              onSave={handleSave}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default TodoItem

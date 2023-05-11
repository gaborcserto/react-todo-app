import React, { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import './todoInput.scss'

function todoInput({ addTodo }: { addTodo: (description: string) => void }) {
  const [description, setDescription] = useState('')

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (description.trim()) {
      addTodo(description)
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-8 drop-shadow-lg todo-add">
        <input
          id="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Add a new task..."
          className="bg-gray-800 text-gray-100 bg-gray-800/60 rounded-[20px] p-4 drop-shadow-lg w-full todo-add__input"
        />
        <span className="absolute inset-y-0 right-4 flex items-center pl-2 text-gray-600">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline rounded-full todo-add__btn"
          >
            <MdOutlineAdd />
          </button>
        </span>
      </div>
    </form>
  )
}

export default todoInput

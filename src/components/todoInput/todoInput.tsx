import React, { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'

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
      <div className="todo-add flex items-center mb-8 drop-shadow-lg ">
        <input
          id="description"
          type="text"
          autoComplete="off"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Add a new task..."
          className="todo-add__input bg-gray-800 text-gray-100 bg-gray-800/60 rounded-[22px] p-4 drop-shadow-lg w-full outline-none"
        />
        <span className="absolute inset-y-0 flex right-1 items-center px-1.5">
          <button
            type="submit"
            className="todo-add__btn p-1 text-gray-100 block focus:outline-none focus:shadow-outline p-3 rounded-[18px] bg-gradient-to-r from-pink-600 to-yellow-600 hover:from-pink-500 hover:to-yellow-500 font-bold transition-all ease-in duration-75"
          >
            <MdOutlineAdd />
          </button>
        </span>
      </div>
    </form>
  )
}

export default todoInput

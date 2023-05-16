import React, { MouseEventHandler } from 'react'
import { MdCancel, MdDelete, MdEdit, MdSave } from 'react-icons/md'

interface ButtonProps {
  isEditing: boolean
  onSave: () => void
  onCancel: () => void
  onEdit: () => void
  onDelete: () => void
}

const todoButtons: React.FC<ButtonProps> = ({ isEditing, onSave, onCancel, onEdit, onDelete }) => {
  return (
    <>
      {isEditing ? (
        <>
          <button
            className="bg-transparent hover:bg-green-700 text-gray-100 p-1 rounded-full text-green-500 hover:text-white"
            onClick={onSave}
          >
            <MdSave />
          </button>
          <button
            className="bg-transparent hover:bg-gray-700 text-gray-100 p-1 rounded-full text-gray-500 hover:text-white"
            onClick={onCancel}
          >
            <MdCancel />
          </button>
        </>
      ) : (
        <>
          <button
            className="todo-item__edit bg-transparent hover:bg-fray-700 text-gray-100 p-1 rounded-full text-gray-500 hover:text-white"
            onClick={onEdit}
          >
            <MdEdit />
          </button>
          <button
            className="todo-item__delete bg-transparent hover:bg-red-700 text-gray-100 p-1 rounded-full text-red-500 hover:text-white"
            onClick={onDelete}
          >
            <MdDelete />
          </button>
        </>
      )}
    </>
  )
}

export default todoButtons

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useLocalStorage from './hooks/useLocalStorage'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import { RiCalendarTodoFill } from 'react-icons/ri'
import { addTodo, editTodo, toggleTodo, deleteTodo, selectTodos } from './reducer/reducer'
import { nanoid } from 'nanoid'
import './App.scss'

function TodoApp() {
  const [newDescription, setNewDescription] = useState('')
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', [])

  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [todos, setStoredTodos])

  const handleAddTodo = (newDescription: string) => {
    if (newDescription) {
      const newTodo = {
        id: nanoid(),
        description: newDescription,
        completed: false,
        editedDate: null,
        createdDate: Date.now(),
      }
      dispatch(addTodo(newTodo))
      setNewDescription('')
    }
  }

  const handleEditTodo = (id: string, description: string, editedDate: number) => {
    dispatch(editTodo({ id, description, editedDate }))
  }

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="App container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Todo App <RiCalendarTodoFill className="inline-block" />
      </h1>
      <TodoInput addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
        editTodo={handleEditTodo}
      />
    </div>
  )
}

export default TodoApp

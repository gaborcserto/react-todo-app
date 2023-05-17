import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

type initialStateType = {
  todos: Todo[]
}

const initialState: initialStateType = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      const { id, description } = action.payload
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.description = description
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase('todos/loadFromLocalStorage', (state, action) => {
      const todos = localStorage.getItem('todos');
      if (todos) {
        state.todos = JSON.parse(todos);
      }
    });
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos.todos
export default todoSlice.reducer

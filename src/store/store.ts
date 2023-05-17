import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../reducer/reducer'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
  preloadedState: {
    todos: {
      todos: [],
    },
  },
})

store.dispatch({ type: 'todos/loadFromLocalStorage' })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

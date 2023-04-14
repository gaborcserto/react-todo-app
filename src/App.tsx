import useLocalStorage from './hooks/useLocalStorage'
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import {nanoid} from 'nanoid';
import './App.scss'

function TodoApp() {
    const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

    function addTodo(description: string) {

        const newTodo: Todo = {
            id: nanoid(),
            description,
            completed: false,
            editedDate: null,
            createdDate: Date.now()
        };
        setTodos([...todos, newTodo]);
    }

    function toggleTodo(id: string) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        });
        setTodos(updatedTodos);
    }

    function deleteTodo(id: string) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    function editTodo(id: string, description: string, editedDate: number) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, description, editedDate};
            } else {
                return todo;
            }
        });
        setTodos(updatedTodos);
    }

    return (
        <div className="App container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Todo App</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    )
}

export default TodoApp

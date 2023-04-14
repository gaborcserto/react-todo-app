import React, {useState} from "react";
import {MdEdit, MdDelete, MdSave, MdCancel} from "react-icons/md";
import styles from './todoItem.module.css';


function TodoItem({
                      todo,
                      toggleTodo,
                      deleteTodo,
                      editTodo
                  }: {
    todo: Todo;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, description: string, editedDate: number) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(todo.description);

    function handleToggle() {
        toggleTodo(todo.id);
    }

    function handleDelete() {
        deleteTodo(todo.id);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        if (description.trim()) {
            editTodo(todo.id, description, Date.now());
            setIsEditing(false);
        }
    }

    function handleCancel() {
        setIsEditing(false);
        setDescription(todo.description);
    }

    return (
        <li className="todo-item bg-gray-800 rounded-lg p-4 my-4 drop-shadow-lg transition ease-in-out delay-150 hover: hover:drop-shadow-2xl duration-300">
            <div className="flex justify-between items-center">
                <div className="flex flex-col w-full">
                    <div className="flex items-center">
                        <input
                            className="form-checkbox h-5 w-5 text-blue-500"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleToggle}
                        />
                        <div className="ml-2 flex-grow">
                            {isEditing ? (
                                <>
                                    <input
                                        className="bg-gray-800 text-gray-100 border-2 border-gray-600 rounded px-2 w-full"
                                        type="text"
                                        value={description}
                                        onChange={event => setDescription(event.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <p className="todo-description text-gray-400 px-4">{todo.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex mt-1">
                        {isEditing ? (
                            <>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-1 px-2 rounded mr-2"
                                    onClick={handleSave}><MdSave/></button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-1 px-2 rounded"
                                    onClick={handleCancel}><MdCancel/></button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-1 px-2 rounded mr-2"
                                    onClick={handleEdit}><MdEdit/></button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-1 px-2 rounded"
                                    onClick={handleDelete}><MdDelete/></button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;

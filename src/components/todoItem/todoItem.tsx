import React, {useState} from "react";
import {MdEdit, MdDelete, MdSave, MdCancel, MdCheck} from "react-icons/md";

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
        <li className={`todo-item bg-gray-800/60 rounded-[20px] p-4 my-4 drop-shadow-lg backdrop-blur-sm ${todo.completed ? 'completed' : ''}`}>
            <div className="flex justify-between items-center">
                <div className="flex w-full">
                    <label className="todo-item__checkbox shrink-0">
                        <input
                            className="hidden"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleToggle}
                        />
                        <div
                            className="w-5 h-5 rounded-full border-2 border-gray-500 transition-all duration-200">
                            <MdCheck className="w-4 h-4 text-gray-600 checkmark" />
                        </div>
                    </label>
                    <div className="flex-1">
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
                                <p className="todo-item__description text-gray-400 px-4">{todo.description}</p>
                            </>
                        )}
                    </div>
                    <div className="shrink-0">
                        {isEditing ? (
                            <>
                                <button
                                    className="duration-200 bg-gray-500 hover:bg-gray-700 text-gray-100 font-bold py-1 px-2 rounded mr-2"
                                    onClick={handleSave}><MdSave/></button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-gray-100 font-bold py-1 px-2 rounded"
                                    onClick={handleCancel}><MdCancel/></button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="transition-[background] ease-in-out duration-200 bg-gray-500 hover:bg-gray-duration-200 todo-edit bg-transparent hover:bg-gray-700 text-gray-100 p-1 rounded-full text-gray-500 hover:text-white"
                                    onClick={handleEdit}><MdEdit/></button>
                                <button
                                    className="todo-delete bg-transparent hover:bg-red-700 text-gray-100 p-1 rounded-full text-red-500 hover:text-white"
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

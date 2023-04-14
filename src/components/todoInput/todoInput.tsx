import React, {useState} from "react";
import styles from './todoInput.module.scss';

function todoInput({addTodo}: { addTodo: (description: string) => void }) {
    const [description, setDescription] = useState("");

    function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (description.trim()) {
            addTodo(description);
            setDescription("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className="flex items-center mb-8 transition drop-shadow-lg ease-in-out delay-150 hover: hover:drop-shadow-2xl duration-300">
                <label htmlFor="description" className="sr-only">Add a new task</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Add a new task..."
                    className="bg-gray-800 text-gray-100 border-2 border-gray-600 rounded-l-lg px-4 py-2 w-full"
                />
                <button type="submit"
                        className="bg-gray-600 border-2 border-gray-600 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded-r-lg">Add
                </button>
            </div>
        </form>
    );
}

export default todoInput;

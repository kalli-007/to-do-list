import React, { useState } from 'react';

function List({ todos, setTodos }) {
  // Track completed todos by index
  const [completed, setCompleted] = useState([]);

  const handleToggle = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="p-5 flex items-center justify-center flex-col gap-4">
      <h1 className="text-xl font-bold">List of Todos</h1>
      <div className="w-full max-w-md">
        <ul className="flex flex-col h-64 overflow-y-auto">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-white p-3 rounded-md mb-2 hover:bg-violet-300 transition duration-300 ease-in-out flex justify-between"
            >
              <span
                className={`text-gray-800 cursor-pointer ${completed.includes(index) ? 'line-through text-gray-400' : ''}`}
                onClick={() => handleToggle(index)}
              >
                {todo}
              </span>
              <button
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                onClick={() => {
                  const newTodos = todos.filter((_, i) => i !== index);
                  setTodos(newTodos);
                  setCompleted((prev) => prev.filter((i) => i !== index));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
     
export default List;
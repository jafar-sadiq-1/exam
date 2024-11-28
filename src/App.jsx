import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState('');
  const [list, setLists] = useState([]);

  const submit = () => {
    // Prevent adding empty tasks
    setLists([...list, tasks]); // Append new task to the list
    setTasks(''); // Clear the input field after adding
  };

  const change = (e) => setTasks(e.target.value);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <h1 className="text-white text-3xl text-center">THIS IS TODO APP</h1>
      <div className="flex h-[100px] w-screen items-center justify-center bg-red-400">
        <input
          className="text-black text-center"
          type="text"
          placeholder="Enter the task"
          value={tasks} // Controlled input
          onChange={change}
        />
        <button
          className="pl-5 pr-5 pt-2 pb-2 ml-5 bg-green-500 rounded"
          onClick={submit}
        >
          Submit
        </button>
      </div>
      <ul className="mt-5">
        {list.map((task, ind) => (
          <li key={ind} className="text-lg">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

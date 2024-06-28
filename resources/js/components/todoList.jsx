import React, {useState} from "react";

function TodoList() {
    const [tasks, setTask] = useState(["Program", "Debug"]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !=="") {
            setTask(t => ([...t, newTask]));
        }
    }

    const handleRemoveTask = (index) => {
        setTask(tasks.filter((_,i) => i !== index));
    }

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    const handleTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(<>
        <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
                <div className="flex m-2">
                    <h1 className="font-sans font-bold">To Do List</h1>
                </div>
                <div className="flex m-2">
                    <input type="text" className="border 
                        text-gray-700 
                        rounded-sm
                        appearance-none 
                        text-sm 
                        font-sans mx-2 p-2 
                        focus:outline-none 
                        leading-tight
                        focus:ring-2
                        focus:ring-blue-500
                        focus:border-blue-500" 
                        placeholder="Enter task..."
                        onChange={() => handleInputChange(event)}/>
                        <button
                            className="bg-blue-500 
                            py-1
                            px-4
                            rounded 
                            focus:outline-none 
                            focus:ring-2  
                            focus:ring-blue-500 
                            focus:ring-opacity-50
                            mx-1
                            text-white
                            w-36
                            text-sm
                            h-9" onClick={() => handleAddTask()}>
                            Add New Task
                        </button>
                </div>
                <div className="flex m-2 ">
                    <ul className="w-full ">
                        {
                            tasks.map((task, index) => (
                                <li key={index} className="border border-gray-400 bg-slate-200 w-1/5 flex justify-center items-center">
                                    <span className="text-xs font-medium text-gray-700 p-2 mx-5 w-28"  onClick={() => handleRemoveTask(index)}>{task}</span>
                                    <button
                                        className="bg-green-500 
                                        py-1
                                        px-4
                                        rounded 
                                        focus:outline-none 
                                        focus:ring-2  
                                        focus:ring-green-500 
                                        focus:ring-opacity-50
                                        m-1
                                        text-white
                                        w-1/5
                                        text-sm
                                        h-9" onClick={() => handleTaskUp(index)}>
                                        Up
                                    </button>
                                    <button
                                        className="bg-green-500 
                                        py-1
                                        px-4
                                        rounded 
                                        focus:outline-none 
                                        focus:ring-2  
                                        focus:ring-green-500 
                                        focus:ring-opacity-50
                                        m-1
                                        text-white
                                       w-1/5
                                        text-sm
                                        h-9"
                                        onClick={() => handleTaskDown(index)}>
                                        Down
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </>);
}

export default TodoList;
import React, { useState } from "react";
import Axios from "axios";

export default function MainPage() {
  
    const [errors, setErrors] = useState({
                'payload.title': '',
                'payload.task': ''
            }
        );
    
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
  
    const SetTitleValue  = (event) => {
        setTitle(event.target.value);
    }

    const SetTaskValue  = (event) => {
        setTask(event.target.value);
    }

    const CreateNewRecord = () => {
        Axios.post('/process/task', {
            payload: {
                id: '',
                title: title,
                task: task,
            },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            setErrors(error.response.data.errors);
        });
    }

    return(<>
        <section className="mx-2 py-2">
            <div className="flex flex-col w-full pt-28">
                <div className="flex pt-3">
                    <button className="px-3 py-3 
                        bg-blue-700 
                        rounded-md 
                        text-white 
                        font-sans
                        text-xs
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-800
                        focus:ring-opacity-50">
                            Create New Record
                        </button>
                </div>
                <div className="flex pt-3 border border-solid my-2">
                    <div className="text-right w-1/2 flex justify-end">
                       <div className="flex flex-col w-1/2">
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Title</label>
                                    <input
                                     className={
                                        errors["payload.title"]
                                            ? "input-field error-field"
                                            : "input-field"
                                    }
                                    placeholder="Please enter Title"
                                    onChange={() => SetTitleValue(event)}/>
                                {
                                errors["payload.title"] && (
                                        <div className="flex">
                                            <span className="error-text mx-1">
                                                {errors["payload.title"]}
                                            </span>
                                        </div>
                                    )
                                }
                            </section>
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Content</label>
                                <textarea
                                    className= {
                                    errors["payload.task"]
                                        ? "input-field error-field"
                                        : "input-field"
                                    }
                                    onChange={() => SetTaskValue(event)}
                                    placeholder="Enter Content"/>
                                {
                                errors["payload.task"] && (
                                        <div className="flex">
                                            <span className="error-text mx-1">
                                                {errors["payload.task"]}
                                            </span>
                                        </div>
                                    )
                                }
                                <div className="flex flex-row mx-1 py-1">
                                    <button className="px-3 py-3 
                                        bg-blue-700 
                                        rounded-md 
                                        text-white 
                                        font-sans
                                        text-xs
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-800
                                        focus:ring-opacity-50" onClick={() => CreateNewRecord()}>
                                          Submit New Record
                                    </button>
                                </div>
                            </section>
                       </div>
                    </div>
                    <div className="text-right w-1/2 flex justify-start mx-1">
                       <div className="flex flex-col w-1/2">
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Status</label>
                                    <select  className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full">
                                        <option value="">Please Select </option>
                                        <option value={1}>Publish</option>
                                        <option value={0}>Archieve</option>
                                    </select>
                            </section>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
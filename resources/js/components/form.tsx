import React, { useState, useEffect } from "react";
import Axios from "axios";

function CreationForm({ data }) {
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [errors, setErrors] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        Axios.post(data.taskUrl, { payload: { title: title, task: task } })
            .then(function (response) {
                //  console.log(response);
            })
            .catch(function (error) {
                setErrors(error.response.data.errors);
            });
    };

    return (
        <>
            <div className="w-full bg-slate-50 shadow-sm rounded-sm">
                <div className="flex justify-between">
                    <div className="font-sans text-xl mx-2">
                        <label>Task Information</label>
                    </div>
                </div>
                <div className="flex justify-start font-sans mx-2 py-5">
                    <div className="w-1/4">
                        <div className="flex">
                            <label className="block text-gray-700 text-sm font-bold mb-2 py-1">
                                Title
                            </label>
                        </div>
                        <div className="flex">
                            <input
                                className={
                                    errors["payload.title"] == null
                                        ? "input-field"
                                        : "input-field error-field"
                                }
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Please input title"
                            />
                        </div>
                        {errors["payload.title"] != 0 && (
                            <div className="flex">
                                <span className="error-text">
                                    {errors["payload.title"]}
                                </span>
                            </div>
                        )}
                        <div className="flex">
                            <label className="block text-gray-700 text-sm font-bold mb-2 py-1">
                                Task Description
                            </label>
                        </div>
                        <div className="flex">
                            <input
                                className={
                                    errors["payload.task"] == null
                                        ? "input-field"
                                        : "input-field error-field"
                                }
                                onChange={(e) => setTask(e.target.value)}
                                placeholder="Please input Task Description"
                            />
                        </div>
                        {errors["payload.task"] != 0 && (
                            <div className="flex">
                                <span className="error-text">
                                    {errors["payload.task"]}
                                </span>
                            </div>
                        )}
                        <div className="flex py-4">
                            <button
                                type="button"
                                className="button-danger"
                                onClick={Submit}
                            >
                                Create New Record
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreationForm;

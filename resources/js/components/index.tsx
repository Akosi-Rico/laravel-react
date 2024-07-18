import React, { useState, useEffect } from "react";
import Axios from "axios";
import DataTable from "react-data-table-component";

export default function MainPage() {
  
    const [errors, setErrors] = useState({
                'payload.title': '',
                'payload.task': '',
                'payload.status': ''
            }
        );
    
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");
  
    const SetTitleValue  = (event) => {
        setTitle(event.target.value);
    }

    const SetTaskValue  = (event) => {
        setTask(event.target.value);
    }

    const SetStatusValue = (event) => {
        setStatus(event.target.value);
    }

    const CreateNewRecord = () => {
        Axios.post('/process/task', {
            payload: {
                id: '',
                title: title,
                task: task,
                status:status
            },
        })
        .then(function (response) {
            if (response) {
                setTitle("");
                setTask("");
                setStatus("");
            }
        })
        .catch(function (error) {
            setErrors(error.response.data.errors);
        });
    }

    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable:true,
        },
        {
            name: "Email",
            selector: row => row.email,
        },
        {
            name: "Age",
            selector: row => row.age,
        }
    ];

    const Data = [
        {
            id: 1,
            name: "A",
            email: "a@gmail.com",
            age: 1
        },
        {
            id: 2,
            name: "B",
            email: "a@gmail.com",
            age: 2
        },
        {
            id: 3,
            name: "C",
            email: "a@gmail.com",
            age: 3
        },
    ];
    // const paginationComponentOptions = {
    //     rowsPerPageText: 'Show Per Page',
    //     rangeSeparatorText: '>',
    //     selectAllRowsItem: true,
    //     selectAllRowsItemText: 'Todos',
    // };
    
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);


    useEffect(() => {
        const timeout = setTimeout(() => {
          setRows(Data);
          setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }, []);

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
                                    value={title}
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
                                    value={task}
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
                                    <select  className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full" 
                                   onChange={() => SetStatusValue(event)} value={status}>
                                        <option value="">Please Select </option>
                                        <option value={1}>Publish</option>
                                        <option value={0}>Archieve</option>
                                    </select>
                            </section>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col pt-3 border border-solid my-2">
                    <DataTable
                        columns={columns}
                        data={Data}
                        progressPending={pending}
                        // selectableRows
                        // fixedHeader
                        pagination>
                    </DataTable>
                </div>
            </div>
        </section>
    </>);
}
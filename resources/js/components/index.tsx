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
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    const [hachero, setRico] = useState(0);
    const [id, setId] = useState("");

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
                id: id,
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
                setRico(h => h+1);
                setId("");
                console.log(hachero);
            }
        })
        .catch(function (error) {
            setErrors(error.response.data.errors);
        });
    }

    const columns = [
        {
            name: "Title",
            selector: row => row.title,
            sortable:true,
        },
        {
            name: "Content",
            selector: row => row.content,
        },
        {
            name: "Status",
            selector: row => row.status_id,
        },
        {
            name: 'Actions',
          //  cell: (row) => [<button key={row.id} className="button-danger" onClick={() => ShowValue(row)}>Edit</button>, <button className="button-danger" onClick={() => ShowValue(row.title)}>Action</button>],
            cell: (row) => [<button key={row.id} className="button-danger" onClick={() => ShowValue(row)}>Edit</button>],
          }
    ];

    const ShowValue = (data) => {
        setTask(data.content);
        setTitle(data.title);
        setStatus(data.status_id);
        setId(data.id);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            Axios.get('/table')
            .then(function (response) {
                if (response) {
                    setRows(response.data);
                    setPending(false);
                }
            })
            .catch(function (error) {
               // setErrors(error.response.data.errors);
            });
        }, 2000);
        return () => clearTimeout(timeout);
      }, [hachero]);

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
                        data={rows}
                        progressPending={pending}
                        selectableRows
                        fixedHeader
                        pagination>
                    </DataTable>
                </div>
            </div>
        </section>
    </>);
}
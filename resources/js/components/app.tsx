import React from "react";
import $ from "jquery";
import DataTable from "datatables.net-dt";
import ListGroup from "./ListGroup";
import CreationForm from "./form";
//  <ListGroup data={data} />
function App({ data }) {
    return (
        <>
            <nav className="bg-slate-100 text-3xl font-sans flex justify-between p-9 fixed w-full">
                <div className="drop-shadow-3xl">
                    <h1 className="font-sans">Task Management System</h1>
                </div>
                <div>
                    <small className="text-sm font-sans">
                        Welcome Rico Hachero Jr
                    </small>
                </div>
            </nav>
            <section className="mx-2 p-2">
                <div className="flex w-full pt-28">
                    <button className="button-primary ">
                        Create New Record
                    </button>
                </div>
            </section>
            <section className="mx-2 p-2">
                <div className="flex w-full">
                    <CreationForm data={data} />
                    {/* <table width="100%" id="tasktable">
                        <thead className="bg-red-200">
                            <tr>
                                <th className="table-thead">Title</th>
                                <th className="table-thead">Content</th>
                                <th className="table-thead">Status</th>
                                <th className="table-thead">Condition</th>
                                <th className="table-thead">Created Date</th>
                                <th className="table-thead">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-tbody">Rico Task</td>
                                <td className="table-tbody">
                                    Create React Task testing
                                </td>
                                <td className="table-tbody">Ongoing</td>
                                <td className="table-tbody">Published</td>
                                <td className="table-tbody">2024-06-20</td>
                                <td className="table-tbody">
                                    <button className="button-primary">
                                        Update Record
                                    </button>
                                    <button className="button-danger">
                                        Create Subtask
                                    </button>
                                    <button className="button-warning">
                                        Task
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-tbody">Rico Task</td>
                                <td className="table-tbody">
                                    Create React Task testing
                                </td>
                                <td className="table-tbody">Ongoing</td>
                                <td className="table-tbody">Published</td>
                                <td className="table-tbody">2024-06-20</td>
                                <td className="table-tbody">
                                    <button className="button-primary">
                                        Update Record
                                    </button>
                                    <button className="button-danger">
                                        Create Subtask
                                    </button>
                                    <button className="button-warning">
                                        Task
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-tbody">Rico Task</td>
                                <td className="table-tbody">
                                    Create React Task testing
                                </td>
                                <td className="table-tbody">Ongoing</td>
                                <td className="table-tbody">Published</td>
                                <td className="table-tbody">2024-06-20</td>
                                <td className="table-tbody">
                                    <button className="button-primary">
                                        Update Record
                                    </button>
                                    <button className="button-danger">
                                        Create Subtask
                                    </button>
                                    <button className="button-warning">
                                        Task
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </section>
        </>
    );
}

export default App;

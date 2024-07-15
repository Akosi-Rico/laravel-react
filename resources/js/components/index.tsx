import React from "react";

export default function MainPage() {
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
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">First Name</label>
                                    <input 
                                    className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full"
                                    placeholder="Please enter Firstname"/>
                            </section>
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Position Name</label>
                                    <input 
                                    className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full"
                                    placeholder="Please enter Position"/>
                            </section>
                       </div>
                    </div>
                    <div className="text-right w-1/2 flex justify-start mx-1">
                       <div className="flex flex-col w-1/2">
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Last name</label>
                                    <input 
                                    className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full"
                                    placeholder="Please enter Firstname"/>
                            </section>
                            <section className="text-left">
                                <label className="text-slate-700 text-sm font-semibold font-sans p-2 text-left ">Role</label>
                                    <select  className="text-xs text-slate-800 border px-3 py-3 rounded-md m-1 shadow-sm appearance-none leading-tight focus:outline-none focus:ring-blue-700 focus:ring-2 w-full">
                                        <option value="">Please Select </option>
                                        <option value="">Admin</option>
                                        <option value="">Encoder</option>
                                    </select>
                            </section>
                       </div>
                    </div>
                </div>  
            </div>
        </section>
    </>);
}
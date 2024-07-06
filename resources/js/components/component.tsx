import React from "react";


export default function ComponentApp() {
    return(<>
        <div className="flex justify-center items-center">
            <div className="flex flex-col border border-solid px-2 py-3 m-2 shadow-md rounded-md max-w-80 min-w-56  transition duration-200 ease-in-out">
                <div className="flex justify-start items-start  px-2 py-2 text-left">
                    <p className="font-sans text-4xl font-bold px-3 py-2 text-center"> Personal Information</p>
                </div>
                <div className="border border-b-1 border-b-slate-50"></div>
                <div className="flex justify-start items-start mx-2 font-sans font-normal p-2">
                    <p className="font-sans font-light text-sm">
                        Using these utilities, you can easily create visually appealing effects by applying filters to the backdrop of elements in your web application.
                    </p>
                </div>
                <div className="border border-b-1 border-b-slate-50"></div>
                <div className="flex justify-start items-start">
                    <button className="px-2 py-2 text-sm
                        my-2
                        mx-1 
                        rounded-md 
                        focus:outline-none bg-blue-600
                        focus:ring-2
                        focus:ring-blue-700
                        focus:ring-opacity-50
                        hover:bg-blue-700
                        transition duration-100 ease-in-out
                        text-white">
                            Submit
                    </button>
                    <button className="px-2 py-2 text-sm
                        my-2
                        mx-1 
                        rounded-md appearance-none 
                        focus:outline-none bg-red-600
                        focus:ring-2
                        focus:ring-red-700
                        focus:ring-opacity-50
                        hover:bg-red-700
                        transition duration-100 ease-in-out
                        text-white">
                            Cancel
                    </button>
                </div>
                <div className="border border-b-1 border-b-slate-50"></div>
                <div className="flex justify-start items-start">
                    <button className="px-3 text-center py-3 text-sm
                        my-2
                        mx-1 
                        rounded-md 
                        focus:outline-none bg-blue-600
                        focus:ring-2
                        focus:ring-blue-700
                        focus:ring-opacity-50
                        hover:bg-blue-700
                        transition duration-100 ease-in-out
                        text-white">
                        <div className="flex flex-row">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                            </svg>
                           <p className="text-xs font-bold text-white">Submit</p>
                        </div>
                    </button>
                    <button className="px-3 text-center py-3 text-sm
                        my-2
                        mx-1 
                        rounded-md 
                        focus:outline-none bg-red-600
                        focus:ring-2
                        focus:ring-red-700
                        focus:ring-opacity-50
                        hover:bg-red-700
                        transition duration-100 ease-in-out
                        text-white">
                        <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                           <p className="text-xs font-bold text-white">Submit</p>
                        </div>
                    </button>
                </div>
                <div className="border border-b-1 border-b-slate-50"></div>
                <div className="flex justify-start items-start">
                    <label className="text-xs text-gray-700 font-bold px-2 py-5 uppercase">Information:</label>
                    <input type="text" placeholder="Enter Information" className="
                        bg-slate-100 
                        px-2
                        py-2
                        rounded-md 
                        mt-2 
                        appearance-none 
                        border 
                        text-gray-700 
                        leading-tight
                        focus:outline-none 
                        focus:ring-2
                        focus:ring-blue-700
                        shadow-sm"/>
                </div>
                <div className="border border-b-1 border-b-slate-50"></div>
                <div className="flex justify-start items-start">
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-700 font-bold  mx-1 pt-2 uppercase">Information</label>
                        <input type="text" placeholder="Enter Information" className="
                            bg-slate-100 
                            px-2
                            py-2
                            rounded-md 
                            mt-2 
                            appearance-none 
                            border 
                            text-gray-700 
                            leading-tight
                            focus:outline-none 
                            focus:ring-2
                            focus:ring-blue-700
                            shadow-sm"/>
                    </div>
                </div>
                <div className="border border-b-1 border-b-slate-50 my-1"></div>
                <div className="flex justify-start items-start">
                    <input type="text" placeholder="Enter Information" className="
                        hover:border-b-blue-500
                        px-2
                        py-2
                        appearance-none
                        border-b
                        text-gray-700 
                        leading-tight
                        focus:outline-none
                        focus:ring-blue-700
                        "/>
                </div>
            </div>
        </div>
    </>);
}
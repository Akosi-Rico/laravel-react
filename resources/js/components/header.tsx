import React from "react";
import PropTypes from "prop-types";
function Header(props) {
    return (
        <>
            <nav className="bg-slate-100 text-3xl font-sans flex justify-between px-6 py-2 fixed w-full">
                <div className="drop-shadow-3xl">
                    <div className="flex flex-row justify-start items-start">
                        <img src={props.data.logo} className="w-28 h-28 m-0 p-0"/>
                        <h1 className="font-sans text-3xl font-bold m-0 py-8">Task Management System</h1>
                    </div>
                </div>
                <div className="m-0 py-8">
                    <small className="text-sm font-sans font-bold ">
                        Welcome Rico Hachero Jr
                    </small>
                </div>
            </nav>
        </>
    );
}

export default Header
import React from "react";

function Header() {
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
        </>
    );
}

export default Header
import React, { useState } from "react";

function ListGroup({ data }) {
    const [name, setName] = useState("");

    const SubmitForm = (e) => {
        e.preventDefault();
        console.log(name);
        alert(name);
    };

    return (
        <>
            <div>
                {/* <h1>Post Data to Laravel API</h1>
                <form>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    id="rico"
                    />
                    <button type="button" onClick={ SubmitForm }>Submit</button>
                </form> */}

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        List of Options
                    </div>
                    <ul className="list-disc list-inside">
                        {data.status.map((item) => (
                            <li className="mb-2" key={item.id}>
                                <span className="text-gray-700">
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ListGroup;

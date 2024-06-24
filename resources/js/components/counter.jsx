import React, { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count -1);
    }

    const reset = () => {
        setCount(0);
    }

    const increment = () => {
        setCount(count + 1);
    }

    return (<>
        <section className="mx-2 p-2">
        <div className="flex w-full pt-28">
           
            <div className="text-center mt-0 mb-50">
                <p className="text-slate-500 font-sans text-[150px] font-bold">{count}</p>
                <button onClick={()=> decrement()}  className="text-white bg-blue-600 border-2 m-2 p-2 w-32 h-14 border-none hover:bg-blue-700">Decrement</button>
                <button onClick={()=> reset()}  className="text-white bg-blue-600 border-2 m-2 p-2 w-32 h-14 border-none hover:bg-blue-700">Reset</button>
                <button onClick={()=> increment()}  className="text-white bg-blue-600 border-2 m-2 p-2 w-32 h-14 border-none hover:bg-blue-700">Increment</button>
            </div>

        </div>
        </section>
    </>);

}

export default Counter;
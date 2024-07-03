import React from "react";
import ComponentC from "./componentC";

export default function ComponentB() {
    return (<>
         <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
               <div className="bg-slate-300 border border-solid border-red-500 p-1">
                 <h1>Component B</h1>
                 <ComponentC/>
               </div>
            </div>
        </section>
    </>);
}
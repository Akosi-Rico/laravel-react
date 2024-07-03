import React from "react";
import ComponentD from "./componentD";

export default function ComponentC() {
    return (<>
         <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
               <div className="bg-slate-300 border border-solid border-red-500 p-10">
                 <h1>Component C</h1>
                 <ComponentD/>
               </div>
            </div>
        </section>
    </>);
}
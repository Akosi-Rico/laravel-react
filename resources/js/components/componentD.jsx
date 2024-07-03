import React, {useContext} from "react";
import {UserContext, Hachero} from "./componentA";

export default function ComponentD() {
    const user = useContext(UserContext);
    const rico = useContext(Hachero);
    return (<>
         <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
               <div className="bg-slate-300 border border-solid border-red-500 p-10">
                <h1>Hi!! {user}  {rico}</h1>
                 <h1>Component D</h1>
               </div>
            </div>
        </section>
    </>);
}
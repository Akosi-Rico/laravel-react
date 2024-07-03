import React, { useState, createContext } from "react";
import ComponentB from "./componentB";

export const UserContext = createContext();
export const Hachero = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("AkosiRico");


    return (<>
         <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
               <div className="bg-slate-300 border border-solid border-red-500 p-1">
                 <h1>Component A</h1>
                 <h2>Welcome! {user}</h2>
                <UserContext.Provider value={user}>
                    <Hachero.Provider value="ikaw lang sapat na">
                        <ComponentB/>
                    </Hachero.Provider>
                </UserContext.Provider>
               </div>
            </div>
        </section>
    </>);
}
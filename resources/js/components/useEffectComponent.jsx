import React, { useState,useEffect } from "react";

function UseEffectComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    /**
        useEffect(() => {
            console.log('This runs only once after the initial render.');
        }, []); // without dependency run once

        useEffect(() => {
            console.log('This runs after every render');
        }); // without dependency run once

        useEffect(() => {
            console.log('This runs only once after the initial render.');
        }, [a,b]); // run every changes
    */

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        document.title = `Width ${width} and Height ${height}`;
    },[width, height]); // with Dependency. run every changes of your dependency

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <section className="mx-2 p-2">
            <div className="flex  flex-col w-full pt-28">
                <p>Width: {width} px</p>
                <p>Height: {height} px</p>
            </div>
        </section>
    </>)
}

export default UseEffectComponent;
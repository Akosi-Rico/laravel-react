import { useState,useEffect,useRef} from "react";
/**
 - useRef = Use Reference does not cause re-renders when its value changes.
  1: accessing/interacting with doem elements;
  2: handling focus, animation and transition
  3: managing timers and Interval
*/
export default function UseRef() {
    const [user, setUser] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("component rendered");
    });


    const handleDataProcess = () => {
    // setUser(u => u + 1);
    //   ref.current++;
    //   console.log(ref.current);
        console.log(inputRef.current.value);
    }

    return(<>
        <section className="mx-2 p-2">
            <div className="flex  flex-col w-24 pt-28">
                <button type="button" className="bg-blue-500 rounded m-2 p-2 text-white shadow-sm focus:ring-2 focus:outline-none focus:ring-blue-700" onClick={() => handleDataProcess()}>Click Me!</button>
                <input placeholder="Enter Data" ref={inputRef}/>
            </div>
        </section>
    </>);
}
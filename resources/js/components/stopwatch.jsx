import React, {useState, useEffect, useRef} from "react";

export default function StopWatch() {
    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const IntervalRef = useRef(null);
    const StartTimeRef =  useRef(0);

    useEffect(() => {
        if (isRunning) {
            IntervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - StartTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(IntervalRef.current);
        }

    }, [isRunning]);

    const Start = () => {
        setIsRunning(true);
        StartTimeRef.current = Date.now() - elapsedTime;
    }

    const Stop = () => {
        setIsRunning(false);
    }

    const Reset = () => {
        setElapsedTime(0);
        setIsRunning(false);

    }

    const FormatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)}:${PadZero(milliseconds)}`;  
    }

    const PadZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

    return (<>
        <section className="mx-2 pt-10">
            <div className="flex flex-col justify-center items-center border border-slate-800 rounded-md shadow-md p-10">
                <div className="flex justify-center items-center">
                    <span className="text-9xl text-slate-700 font-extrabold font-mono">{FormatTime()}</span>
                </div>
                <div className="flex justify-center items-center">
                    <button type="button" className="bg-blue-700 font-semibold font-sans text-center border-none w-28 text-white py-2 px-4 mx-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800  focus:ring-opacity-50" onClick={() => Start() }>START</button>
                    <button type="button" className="bg-red-700 font-semibold font-sans text-center border-none w-28 text-white  py-2 px-4  mx-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800  focus:ring-opacity-50"  onClick={() => Stop() }>STOP</button>
                    <button type="button" className="bg-green-700 font-semibold font-sans text-center border-none w-28 text-white  py-2 px-4  mx-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800  focus:ring-opacity-50"  onClick={() => Reset() }>RESET</button>
                </div>
            </div>
        </section>    
    </>);
}
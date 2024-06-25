import React, {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    const handleColorPicker = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <section className="mx-2 p-2">
                <div className="flex w-full pt-28">
                    <div className="flex flex-col justify-center items-center font-bold font-sans">
                        <h1>Color Picker</h1>
                        <div className="w-[150px] h-[150px] mb-2 flex justify-center items-center text-center rounded-md font-sans text-slate-200 transition duration-300 ease-in" style={ {backgroundColor: color}}>
                           <p>Selected Color {color}</p>
                        </div>
                        <p className="text-md mb-2">Select a color</p>
                        <input type="color" className="w-[100px] h-[30px] " value={color} onChange={() => handleColorPicker(event)}/>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ColorPicker;
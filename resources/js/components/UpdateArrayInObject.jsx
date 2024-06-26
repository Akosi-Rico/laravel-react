import React, {useState} from "react";

function DreamCarArrayInObject() {

    // using useState and updater function with spread operator

    const [cars, setCar] = useState([]);
    const [year, setYear] = useState(new  Date().getFullYear())
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const handleCarYear = (event) => {
       setYear(event.target.value);
    }

    const handleCarMake = (event) => {
        setMake(event.target.value);
    }

    const handleCarModel = (event) => {
       setModel(event.target.value);
    }

    const handleAddingCar = () => {
        setCar(c => ([...c, {year:year, make:make, model:model}]));
        setYear(new  Date().getFullYear());
        setMake("");
        setModel("");
    }

    const handleRemovingCar = (index) => {
        setCar(cars.filter((_,i) => i != index));
    }

    return (<>
            <section className="mx-2 p-2">
                <div className="flex  flex-col w-full pt-28">
                    <div className="flex m-2">
                        <p>Your Favorite Car is </p>
                    </div>
                    <div className="flex m-2">
                       <ul>
                         {
                            cars.map((element, index) => 
                                <li key={index} onClick={() => handleRemovingCar(index)}>
                                    {element.year} {element.make} {element.model}
                                </li>)
                         }
                       </ul>
                    </div>
                   <div className="flex m-2 ">
                        <input type="number" className="text-gray-700 border leading-tight focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-8 p-2  appearance-none 
                        shadow-sm rounded-md" onChange={() => handleCarYear(event)} value={year}/>
                   </div>
                   <div className="flex m-2 ">
                        <input type="text" className="text-gray-700 border leading-tight focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-8 p-2  appearance-none 
                        shadow-sm rounded-md" onChange={() => handleCarMake(event)} value={make} placeholder="Enter Make"/>
                   </div>
                   <div className="flex m-2">
                        <input type="text" className="text-gray-700 border leading-tight focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-8 p-2  appearance-none 
                        shadow-sm rounded-md" onChange={() => handleCarModel(event)} value={model} placeholder="Enter Model"/>
                   </div>
                   <div className="flex m-2">
                         <button className="button-primary" onClick={() => handleAddingCar()}>Adding New Car</button>
                   </div>
                </div>
           </section>
    </>);
}

export default DreamCarArrayInObject;
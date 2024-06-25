import React, {useState} from "react";

function DreamCar() {

    // using useState and updater function with spread operator

    const [car, setCar] = useState({year:2024, make: "Toyota", model: "Hilux"})
    const handleCarYear = (event) => {
        setCar(c => ({...c, year: event.target.value}));
    }

    const handleCarMake = (event) => {
        setCar(c => ({...c, make: event.target.value}));
    }

    const handleCarModel = (event) => {
        setCar(c => ({...c, model: event.target.value}));
    }

    return (<>
            <section className="mx-2 p-2">
                <div className="flex  flex-col w-full pt-28">
                    <div className="flex m-2">
                        <p>Your Favorite Car is {car.year} {car.make} {car.model}</p>
                    </div>
                   <div className="flex m-2 ">
                        <input type="number" onChange={() => handleCarYear(event)} value={car.year}/>
                   </div>
                   <div className="flex m-2 ">
                        <input type="text" onChange={() => handleCarMake(event)} value={car.make}/>
                   </div>
                   <div className="flex m-2">
                        <input type="text" onChange={() => handleCarModel(event)} value={car.model}/>
                   </div>
                </div>
           </section>
    </>);
}

export default DreamCar;
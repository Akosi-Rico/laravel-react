import React, {useState} from "react";

function UpdateArrayList() {
    const [foods, setFood] = useState(["Apple", "Banana", "Mango"]);

    const handleAddingFood = () => {
       const newFood = document.getElementById("addFood").value;
       setFood(f => ([...f, newFood]));
       document.getElementById("addFood").value = null;
    }


    const handleRemovingFood = (index) => {
        // using _ in the parameter mean ignore
        setFood(foods.filter((_,i) => i != index) );
     }

    return(<>
         <section className="mx-2 p-2">
                <div className="flex flex-col w-full pt-28">
                      <h1>List Items</h1>
                        <div className="flex m-10">
                            <ul>
                            {
                                foods.map((food, index) => (
                                    <li key={index} onClick={() => handleRemovingFood(index)}>{food}</li>
                                ))
                            }
                            </ul>
                            
                        </div>
                        <div className="flex m-10">
                            <input type="text" id="addFood" placeholder="Adding new food" className="
                                text-gray-700 border leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mx-8 p-2  appearance-none shadow-sm rounded-md"/>
                            <button className="bg-cyan-800 mx-8 px-3 rounded-md text-center font-sans text-sm text-white" onClick={() => handleAddingFood()}>
                                Add Food
                            </button>
                        </div>
                </div>
        </section>
    </>);
}

export default UpdateArrayList;
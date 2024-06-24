import React, {useState} from "react";

function Element() {
    // input, number input, text area, radio, select.
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [instrunction, setInstruction] = useState("");
    const [shipping, setShipping] = useState("");
    const [payment, setPayment] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const handleInstruction = (event) => {
        setInstruction(event.target.value);
    }

    const handleShipping = (event) => {
        setShipping(event.target.value);
    }

    const handlePayment = (event) => {
        setPayment(event.target.value);
    }


    return (<>
        <section className="mx-2 p-2">
            <div className="flex w-full pt-28">
                <div className="flex flex-rows-1">
                    <p> Name: {name} </p>  &nbsp;
                    <input type="text" onChange={() => handleName(event)} placeholder="input name"/><br/>
                </div>
            </div>
            <div className="flex">
                <p> Quantity: {quantity} </p> &nbsp;
                <input type="number" onChange={() => handleQuantity(event)} placeholder="input Quantity"/><br/>
            </div>
            <div className="flex ">
                <p> Instruction: {instrunction} </p>  &nbsp;
                <textarea type="text" className="bg-slate-400 border-2  h-[100px] w-32" value={instrunction} onChange={() => handleInstruction(event)} placeholder="input delivery Instruction"/><br/>
            </div>
            <div className="flex">
                <p> Shipping: {shipping} </p>  &nbsp;
                <label className="mx-5">
                    <input type="radio" value="PickUp" onChange={() => handleShipping(event)} checked={shipping === "PickUp"}/>
                    Pick Up
                </label>
                <br/>
                <label className="mx-5">
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={() => handleShipping(event)}/>
                    Delvery Up
                </label>
            </div>
            <div className="flex ">
                <p> Payment: {payment} </p>  &nbsp;
                <select value={payment} onChange={() => handlePayment(event)}>
                    <option value="">Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
            </div>
        </section>
    </>);

}

export default Element;